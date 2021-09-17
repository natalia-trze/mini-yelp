import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  restaurant_name: { type: String },
  city: { type: String },
  tag: { type: String },
  price_range: { type: String },
  lat: { type: Number },
  lnt: { type: Number },
  phone: { type: String },
  image: { type: String },
  rating: { type: String },
  website: { type: String },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;
