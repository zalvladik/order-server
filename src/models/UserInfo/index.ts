import { Schema, model } from "mongoose";
import Joi from "joi";

import type { UserSchemaT } from "./types";

const numberPattern = /^\d{10}$/;

const UserSchema = new Schema<UserSchemaT>({
  instagram: { type: String },
  quantity: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  numberPhone: { type: String, required: true, match: numberPattern },
  color: {
    type: String,
    required: true,
    enum: ["Синій", "Рожевий"],
  },
});

export const joiUserSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  numberPhone: Joi.string().min(10).pattern(numberPattern).required(),
  color: Joi.string().valid("Синій", "Рожевий").required(),
  quantity: Joi.number().min(1).max(30).required(),
  instagram: Joi.string(),
});

export const UserInfo = model("User", UserSchema);
