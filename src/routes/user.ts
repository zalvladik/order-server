import { Router } from "express";

import UserController from "src/controllers/UserController";
import { RoutesPath } from "./constants";
import validateBody from "src/middleware/validateBody";
import { joiUserSchema } from "src/models/UserInfo";

const router = Router();

//✔️ ❌

router.post(
  RoutesPath.CREATE_USER_INFO,
  validateBody(joiUserSchema),
  UserController.create
); //✔️

export default router;
