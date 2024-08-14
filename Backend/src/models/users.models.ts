import { model, Schema } from "mongoose";
import { IUserSchema } from "../interfaces/users.interfaces";

const userSchema = new Schema<IUserSchema>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    auth0Id: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
export const UserModel = model<IUserSchema>("User", userSchema);
