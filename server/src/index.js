import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import { authentication } from "./middlewares/user.middleware.js";
import carsRouter from "./routes/car.route.js";
import userRouter from "./routes/user.routes.js";

const app = express();

console.log(process.env.ALLOWED_ORIGIN);
// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());

connectDB();

// Routes
app.use("/api", userRouter);
app.use("/api/cars", carsRouter);
app.use("/api/verify-auth", authentication, (req, res) => {
  const user = req?.user;
  res.json({ success: true, user });
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Car Portal");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
