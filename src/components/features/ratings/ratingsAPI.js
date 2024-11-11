const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://xartso-server-xpr7.vercel.app"
    : "http://localhost:8080";

export function addToRating(item) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/ratings`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data, status: response.status });
  });
}

export function fetchAllRating() {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/ratings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data: { ratings: data } });
  });
}

export function deleteItemFromRatings(ratingId) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/ratings/${ratingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    console.log("response for rating in fetch", response?.status);
    const data = await response.json();
    console.log("response for fav in fetch 011", data);
    resolve({ data: { id: ratingId }, status: response.status });
  });
}
