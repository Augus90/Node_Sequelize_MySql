const express = require("express");
const morgan = require("morgan");
const router = require("../router/lineas.router");
var cors = require("cors");
const dotenv = require("dotenv");

// const router = require("../router/product.router");

const app = express();

// Set up Global configuration access
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Welcome to node application");
// });

/** Importante para poder leer el cuerpo de las peticiones http */
app.use(express.json());
app.use("/api/v1", router);

module.exports = app;
