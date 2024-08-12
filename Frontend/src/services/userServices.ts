import axios from "axios";

import { UserInterface } from "../interfaces/userInterface";

export const getUser = async () => {
  try {
    const response = await axios.get("/api/user");
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don`t received user");
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`/api/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don't received user id", error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: UserInterface) => {
  try {
    const response = await axios.patch(`/api/user/${id}`, userData);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t updated", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`/api/user/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("User don`t deleted", error);
    throw error;
  }
};
