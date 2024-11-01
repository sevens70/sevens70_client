const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://xartso-server-xpr7.vercel.app"
    : "http://localhost:8080";

export function addToFavourite(item) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite`, {
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

export function fetchItemsByUserId() {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateFavourite(update) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromFavourite(productId) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    console.log("response for fav in fetch", response?.status);
    const data = await response.json();
    console.log("response for fav in fetch 011", data);
    resolve({ data: { id: productId }, status: response.status });
  });
}

export function resetFavourite() {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromFavourite(item.id);
    }
    resolve({ status: "success" });
  });
}
