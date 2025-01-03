const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function addToCart(item) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(item),
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

export function fetchItemsByUserId() {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/cart`, {
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

export function updateCart(update) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/cart/${update.id}`, {
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

export function deleteItemFromCart(itemId) {
  const token = sessionStorage.getItem("authToken");
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/cart/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
