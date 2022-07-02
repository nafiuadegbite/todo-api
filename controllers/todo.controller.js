const todoModel = require("../models/todoModel");

let todoId = 0;

const httpGetAllTodo = (req, res) => {
  todoModel.find({}, (err, toDos) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).json({ message: "All Todos", toDos });
    }
  });
};

const httpAddTodo = (req, res) => {
  const { title, description } = req.body;
  todoId++;

  const todoAdd = new todoModel({
    _id: todoId,
    title: title,
    description: description,
  });

  todoAdd.save((err, todo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "To-Do has been created",
        todo,
      });
    }
  });
};

const httpDeleteAllTodo = (req, res) => {
  todoModel.remove({}, (err, toDo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "All To-Do has been removed",
        toDo,
      });
    }
  });
};

module.exports = {
  httpGetAllTodo,
  httpAddTodo,
  httpDeleteAllTodo,
};
