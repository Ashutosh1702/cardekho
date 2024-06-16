import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import carsRouter from "./src/routes/car.route.js";
import { authentication } from "./src/middlewares/user.middleware.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api", userRouter);
// app.use("/api/job", jobRouter);
// app.use("/api/company", companyRouter);
// app.use("/api/skills", skillRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/apply", applyRouter);
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
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
