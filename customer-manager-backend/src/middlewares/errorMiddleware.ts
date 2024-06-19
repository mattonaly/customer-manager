import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  res.status(res.statusCode || 500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;
