import axiosInstance from "../axios.config";

export const getGenre = async () => {
  try {
    const response = await axiosInstance.get("/api/genre");
    console.log("API response:", response);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.log("Don`t received genre");
    throw error;
  }
};
