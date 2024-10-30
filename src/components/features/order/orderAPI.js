const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://xartso-server-xpr7.vercel.app"
    : "http://localhost:8080";

export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/orders/${order.id}`, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = "";

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/orders?${queryString}`, {
      credentials: "include",
    });
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
export function fetchAllOrderByUserId(sort, pagination, user) {
  let queryString = "";

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    // const response = await fetch(`${BASE_URL}/cart/${itemId}`, {
    const response = await fetch(
      `${BASE_URL}/orders/${user.id}?${queryString}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
