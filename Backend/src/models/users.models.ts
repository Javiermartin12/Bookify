import { model, Schema } from "mongoose";
import { IUserSchema } from "../interfaces/users.interfaces";

const userSchema = new Schema<IUserSchema>(
  {
    name: { type: String, required: true, unique: true },
    gmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
export const UserModel = model<IUserSchema>("User", userSchema);
