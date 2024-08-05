import { Request, Response } from "express";
import { UserModel } from "../models/users.models";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await UserModel.find();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const createUser = async (req: Request, res: Response) => {
  const { name, gmail, password } = req.body;
  try {
    const newUser = await UserModel.create({ name, gmail, password });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { name, gmail, password } = req.body;
  const { userId } = req.params;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { name, gmail, password },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const userDelete = await UserModel.findOneAndDelete({ _id: userId });
    res.status(200).send(userDelete);
  } catch (error) {
    res.status(400).send(error);
  }
};
