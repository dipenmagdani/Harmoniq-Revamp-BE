//@desc Get health status
//@route GET /api/health
//@access public
import { Request, Response } from "express";

const getHealthStatus = (req: Request, res: Response) => {
  res.json({
    health: "OK",
    message: "Welcome to the Harmoniq BE",
    status: res.statusCode,
  });
};

export { getHealthStatus };
