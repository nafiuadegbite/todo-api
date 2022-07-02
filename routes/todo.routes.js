const express = require("express");
const {
  httpGetAllTodo,
  httpAddTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get("/", httpGetAllTodo);
todoRouter.post("/", httpAddTodo);

module.exports = { todoRouter };
