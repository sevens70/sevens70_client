import toast from "react-hot-toast";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://sevens70.vercel.app"
    : "http://localhost:8080";

export function fetchAllBanner() {
  const token = sessionStorage.getItem("authToken");
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
