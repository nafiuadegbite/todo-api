const todoModel = require("../models/todoModel");

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

  const todoAdd = new todoModel({
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

module.exports = {
  httpGetAllTodo,
  httpAddTodo,
};
