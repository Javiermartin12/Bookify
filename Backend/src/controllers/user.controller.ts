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
  const { name, email, auth0Id } = req.body;
  try {
    const newUser = await UserModel.create({ name, email, auth0Id });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const registerUserWithAuth0 = async (req: Request, res: Response) => {
  const { email, name, auth0Id } = req.body;
  console.log({ email, name, auth0Id });
  try {
    let user = await UserModel.findOne({ auth0Id });
    console.log(user);
    if (!user) {
      user = new UserModel({ email, name, auth0Id });
      await user.save();
    }
    console.log(user);
    res.status(201).json({ message: "User registered succesfully", user });
  } catch (error) {
    console.error("Error en el backend:", error);
    res.status(500).json({ message: "Error to singup user", error });
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
