const express = require("express");
const morgan = require("morgan");
const { todoRouter } = require("./routes/todo.routes");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/todo", todoRouter);

module.exports = app;
