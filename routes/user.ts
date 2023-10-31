import { Router } from "express";

import UserController from "../controllers/UserController";
import { RoutesPath } from "./constants";
import validateBody from "../middleware/validateBody";
import { joiUserSchema } from "../models/UserInfo";

const router = Router();

//✔️ ❌

router.post(
  RoutesPath.CREATE_USER_INFO,
  validateBody(joiUserSchema),
  UserController.create
); //✔️

export default router;
