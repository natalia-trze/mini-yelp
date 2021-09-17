import Restaurant from "../models/restaurant.js";

export async function getAll(req, res) {
  try {
    const result = await Restaurant.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOneByID(request, response) {
  try {
    const { query } = request.params;
    console.log(query);
    const result = await Restaurant.findOne(query);
    console.log(result);
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}
export async function getAllByCity(request, response) {
  try {
    const city = request.params.city;

    console.log(city);
    const result = await Restaurant.find({
      city: city,
    });
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

export async function getAllByTag(request, response) {
  try {
    const result = await Restaurant.find({
      tag: request.params.tag,
    });
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

export async function createOne(request, response) {
  try {
    const newRestaurant = await Restaurant.create(request.body);
    response.json(newRestaurant);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}
