const express = require("express");
const {
  httpGetAllTodo,
  httpAddTodo,
  httpDeleteAllTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get("/", httpGetAllTodo);
todoRouter.post("/", httpAddTodo);
todoRouter.delete("/", httpDeleteAllTodo);

module.exports = { todoRouter };
