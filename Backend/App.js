const express = require("express");
const app = express();
app.use(express.json());

//cors is used for sending request across internet//
const cors = require("cors");
app.use(cors());

const bodyParse = require("body-parser");
app.use(bodyParse.json());

//route for blog
const BlogRoute = require("./Routes/BlogRoutes");

app.use("/api/blog", BlogRoute);
module.exports = app;
