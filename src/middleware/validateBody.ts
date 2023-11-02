import type { NextFunction, Request, Response } from "express";

const validateBody = (schema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(401).send({ message: "Validation error !" });
    }
    next();
  };

  return func;
};

export default validateBody;
