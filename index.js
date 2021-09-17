import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import restaurantsRouter from "./routes/restaurant.js";
import citiesRouter from "./routes/city.js";
import tagsRouter from "./routes/tag.js";

import connectToDatabase from "./models/index.js";


  const PORT = process.env.PORT || 8080;
  var app = express();
  
  app.use(express.json());
  
  app.use(cors());
  
  app.use("/restaurants", restaurantsRouter);
  app.use("/cities", citiesRouter);
  app.use("/tags", tagsRouter);
  
  connectToDatabase().then((err, res) => {
    app.listen(PORT, function () {
      console.log("server is running on" + " " + `http://localhost:${PORT}`);
    });
  });



