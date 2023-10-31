import type { NextFunction, Request, Response } from "express";

import { UserCreateRequestT } from "./types";
import UserService from "../../services/UserService";

class UserController {
  static async create(
    req: Request<{}, {}, UserCreateRequestT>,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    if (!req.body)
      next(res.status(400).send({ message: "Required fields are missing" }));

    const result = await UserService.create(req.body);

    if (!result) {
      next(res.status(400).send({ message: "Something wrong" }));
    }

    return res.status(200).send({ message: "Your info posted" });
  }
}

export default UserController;
