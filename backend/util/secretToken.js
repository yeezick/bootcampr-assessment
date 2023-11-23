import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createSecretToken = (id, roleId, role) => {
  return jwt.sign({ id, roleId, role }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
