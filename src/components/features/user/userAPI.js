const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://xartso-server-xpr7.vercel.app"
    : "http://localhost:8080";

export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/orders/own/`, {
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/users/own`, {
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/users/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}
