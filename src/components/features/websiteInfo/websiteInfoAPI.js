import axiosInstance from "../../../lib/axiosInstance";

export async function fetchWebsiteInfo() {
  try {
    const response = await axiosInstance.get("/settings", {
      withCredentials: true,
    });
    return { data: response.data };
  } catch (error) {
    throw error;
  }
}
