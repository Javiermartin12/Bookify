import axiosInstance from "../axios.config";

export const getGenre = async () => {
  try {
    const response = await axiosInstance.get("/api/genre");
    return response.data;
  } catch (error) {
    console.error("Don`t received genre");
    throw error;
  }
};
