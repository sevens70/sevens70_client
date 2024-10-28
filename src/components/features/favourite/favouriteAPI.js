const BASE_URL = "http://localhost:8080"; // Define your base URL

export function addToFavourite(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite`, {
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateFavourite(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromFavourite(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/favourite/${itemId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
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
