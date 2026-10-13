import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || "default_jwt_secret", { expiresIn: "15m" });
};

export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET || "default_jwt_refresh_secret", {
    expiresIn: "7d",
  });
};
