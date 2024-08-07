import axios from "axios";
import axiosInstance from "../axios.config";
import { UserInterface } from "../interfaces/userInterface";

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don`t received user");
    throw error;
  }
};

export const getBooksById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don't received user id", error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: UserInterface) => {
  try {
    const response = await axiosInstance.patch(`/user/${id}`, userData);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t updated", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t deleted", error);
    throw error;
  }
};
