
import { getAuthToken } from "../../../lib/utils/utils";
const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// Fetch all brands
export async function fetchSunglassBanner() {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassBanner`, {
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
      throw new Error("Failed to fetch banner.");
    }
  } catch (error) {
    console.error("Error fetching banner:", error.message);
    throw error;
  }
}

// Fetch a single brand by ID
export async function fetchSunglassById(id) {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/sunglassBanner/${id}`, {
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
      throw new Error("Failed to fetch banner by ID.");
    }
  } catch (error) {
    console.error("Error fetching banner by ID:", error.message);
    throw error;
  }
}

