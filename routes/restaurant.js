import Router from "express";
import {
  getAll,
  createOne,
  getOneByID,
  getAllByCity,
  getAllByTag,
} from "../controllers/restaurant.js";

const restaurantsRouter = Router();

restaurantsRouter.route("/").get(getAll).post(createOne);

restaurantsRouter.route("/:id").get(getOneByID);
restaurantsRouter.route("/city/:city").get(getAllByCity);
restaurantsRouter.route("/tag/:tag").get(getAllByTag);

export default restaurantsRouter;
