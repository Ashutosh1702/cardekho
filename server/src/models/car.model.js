import { Schema, model } from "mongoose";

const carSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  max_speed: {
    type: Number,
    required: true,
  },
  make_year: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Car = model("Car", carSchema);

export default Car;
