import { Router } from "express";
import fetchAllCars from "../controllers/car.controller.js";

const carsRouter = Router();

carsRouter.get("/", fetchAllCars);

export default carsRouter;
