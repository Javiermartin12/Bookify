import { Request, Response } from "express";
import { UserModel } from "../models/users.models";

export const getAllUser = async (req: Request, res: Response) => {
  res.send;
};
export const createUser = async (req: Request, res: Response) => {
  const { id, name, gmail, password } = req.body;
  try {
    const newUser = await UserModel.create({ id, name, gmail, password });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const updateUser = async (req: Request, res: Response) => {
  res.send;
};
export const deleteUser = async (req: Request, res: Response) => {
  res.send;
};
