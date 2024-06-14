import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);
    const expirationTime = 24 * 60 * 60 * 1000; // 10 days in millis

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: expirationTime,
        sameSite: "lax",
        secure: true,
      })

      .json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = generateToken(user);
    const expirationTime = 24 * 60 * 60 * 1000; // 10 days in millis
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: expirationTime,
        sameSite: "lax",
        secure: true,
      })

      .json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { loginController, signupController };
