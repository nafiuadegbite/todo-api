const express = require("express");
const {
  httpGetAllTodo,
  httpAddTodo,
  httpDeleteAllTodo,
  httpGetTodo,
  httpUpdateTodo,
  httpDeleteTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter
  .get("/", httpGetAllTodo)
  .get("/:id", httpGetTodo)
  .post("/", httpAddTodo)
  .patch("/:id", httpUpdateTodo)
  .delete("/:id", httpDeleteTodo)
  .delete("/", httpDeleteAllTodo);

module.exports = { todoRouter };
