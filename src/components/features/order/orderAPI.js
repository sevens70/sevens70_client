import axiosInstance from "../../../lib/axiosInstance";

export async function createOrder(order) {
  try {
    const response = await axiosInstance.post("/orders", order, {
      withCredentials: true,
    });
    return { data: response.data };
  } catch (error) {
    return { error: error.response?.data?.error || error.message };
  }
}

export async function updateOrder(order) {
  try {
    const response = await axiosInstance.patch(`/orders/${order.id}`, order, {
      withCredentials: true,
    });
    return { data: response.data };
  } catch (error) {
    return { error: error.response?.data?.error || error.message };
  }
}

export async function fetchAllOrders(sort, pagination) {
  try {
    const params = { ...sort, ...pagination }; // Combine sort and pagination into query parameters
    const response = await axiosInstance.get("/orders", {
      params, // Axios automatically serializes params
      withCredentials: true,
    });
    const totalOrders = response.headers["x-total-count"];
    return { data: { orders: response.data, totalOrders: +totalOrders } };
  } catch (error) {
    return { error: error.response?.data?.error || error.message };
  }
}

export async function fetchAllOrderByUserId(sort, pagination, user) {
  try {
    const params = { ...sort, ...pagination }; // Combine sort and pagination into query parameters
    const response = await axiosInstance.get(`/orders/${user.id}`, {
      params,
      withCredentials: true,
    });
    const totalOrders = response.headers["x-total-count"];
    return { data: { orders: response.data, totalOrders: +totalOrders } };
  } catch (error) {
    return { error: error.response?.data?.error || error.message };
  }
}
