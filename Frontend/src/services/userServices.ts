import { UserInterface } from "../interfaces/userInterface";
import axiosInstance from "../axios.config";

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/api/user");
    console.log("API response:", response);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.log("Don`t received user");
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don't received user id", error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: UserInterface) => {
  try {
    const response = await axiosInstance.patch(`/api/user/${id}`, userData);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t updated", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t deleted", error);
    throw error;
  }
};
