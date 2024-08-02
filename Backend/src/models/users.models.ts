import { model, Schema } from "mongoose";
import { IUserSchema } from "../interfaces/users.interfaces";

const userSchema = new Schema<IUserSchema>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    gmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
export const UserModel = model<IUserSchema>("User", userSchema);
