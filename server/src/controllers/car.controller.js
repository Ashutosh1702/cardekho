import Car from "../models/car.model.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
export default async function fetchAllCars(req, res) {
  try {
    const cars = await Car.find();

    return res.json(cars);
  } catch (error) {
    res.sendStatus(500);
  }
}
