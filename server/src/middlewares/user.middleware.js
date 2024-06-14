import User from "../models/user.model.js";
import { verifyToken } from "../utilities/jwt.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
const authentication = async (req, res, next) => {
  try {
    const token =
      req.cookies.access_token || req.headers.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error in authorizing the user", error: error.message });
  }
};

export { authentication };
