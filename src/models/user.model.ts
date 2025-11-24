import { Connection, Schema } from "mongoose";

export const UserModel = (db: Connection) => {
  const userSchema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
  );

  return db.model("User", userSchema);
};
