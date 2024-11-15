const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function fetchWebsiteInfo() {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/settings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    console.log("data for website info", data);
    resolve({ data });
  });
}
