import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    switch (err.name) {
      case "Required fields are missing":
        res.status(404).send({ message: "Required fields are missing!" });
        break;
    }
  }

  next();
};
