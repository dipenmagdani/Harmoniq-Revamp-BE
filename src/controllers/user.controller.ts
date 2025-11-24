import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getDB } from "../config/db"; // custom function returning DB connection
import { UserModel } from "../models/user.model";

const db = getDB();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required",
      status: 400,
    });
  }

  try {
    const User = UserModel(db);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      status: 201,
      data: savedUser,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "User with this email already exists",
        status: 409,
      });
    }

    return res.status(500).json({
      message: "Internal server error",
      status: 500,
      error: error.message,
    });
  }
};
export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const User = UserModel(db);

    const users = await User.find();

    return res.status(200).json({
      message: "Users retrieved successfully",
      status: 200,
      data: users,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      status: 500,
      error: error.message,
    });
  }
};
