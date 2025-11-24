import express from "express";
import { getHealthStatus } from "../controllers";
import { createUser, getAllUsers } from "../controllers/user.controller";

const router = express.Router();

router.get("/health", getHealthStatus);
router.post("/users", createUser).get("/users", getAllUsers);

export default router;
