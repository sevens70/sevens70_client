import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function fetchAllBanner() {
  const token = sessionStorage.getItem("authToken");
  console.log("BASE_URL 123", BASE_URL);
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/banner`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data: { banner: data } });
  });
}
