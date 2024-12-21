// import { getAuthToken } from "@/components/utils";
import toast from "react-hot-toast";
import { getAuthToken } from "../../../lib/utils/utils";
// import { getAuthToken } from "../utils";

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// Create a new brand
export async function createSunglassProduct(payload) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      toast.success("Product created successfully.");
      return { data };
    } else {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      toast.error("Failed to create Product.");
      throw new Error(errorText);
    }
  } catch (error) {
    // console.error("Error creating brand:", error.message);
    toast.error("An error occurred while creating the product.");
    throw error;
  }
}
export async function orderSunglassProduct(payload) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("ordered prd", data);
      toast.success("Product rdered successfully.");
      return { data };
    } else {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      toast.error("Failed to create Product.");
      throw new Error(errorText);
    }
  } catch (error) {
    // console.error("Error creating brand:", error.message);
    toast.error("An error occurred while creating the product.");
    throw error;
  }
}

// Fetch all brands
export async function fetchSunglassProduct() {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassProduct`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error("Failed to fetch product.");
    }
  } catch (error) {
    console.error("Error fetching product:", error.message);
    throw error;
  }
}

// Delete a brand
export async function deleteSunglassProduct(id) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      // toast.success("Brand deleted successfully.");
      return { data };
    } else {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      toast.error("Failed to delete product.");
      throw new Error(errorData.message || "Unknown error.");
    }
  } catch (error) {
    console.error("Error deleting product:", error.message);
    throw error;
  }
}

// Fetch a single brand by ID
export async function fetchSunglassPruductById(id) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassProduct/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error("Failed to fetch product by ID.");
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }
}

// Update an existing brand
export async function updateSunglassProduct(update) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassProduct/${update.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(update),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      toast.success("Product updated successfully.");
      return { data };
    } else {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      toast.error("Failed to update product.");
      throw new Error(errorText);
    }
  } catch (error) {
    console.error("Error updating product:", error.message);
    throw error;
  }
}
