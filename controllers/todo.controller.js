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

const httpGetTodo = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      error: "Please enter an id",
    });
  }

  todoModel.findById(id, (err, toDo) => {
    if (err) {
      res.status(404).json({
        error: "Todo details not found",
      });
    } else {
      res.status(200).json({
        message: "To-Do",
        toDo,
      });
    }
  });
};

const httpAddTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "Missing required todo property",
    });
  }

  const todoAdd = new todoModel({
    title: title,
    description: description,
  });

  todoAdd.save((err, toDo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "To-Do has been created",
        toDo,
      });
    }
  });
};

const httpUpdateTodo = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "Please enter an id",
    });
  }

  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "Missing required todo property",
    });
  }

  todoModel.findByIdAndUpdate(
    id,
    {
      title: title,
      description: description,
    },
    (err, toDo) => {
      if (err) {
        res.status(404).json({
          error: "Todo details not found",
        });
      } else {
        res.status(200).json({
          message: "To-Do updated",
          toDo,
        });
      }
    }
  );
};

const httpDeleteTodo = (req, res) => {
  const { id } = req.params;
  todoModel.findByIdAndDelete(id, (err, toDo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "To-Do has been removed",
        toDo,
      });
    }
  });
};

const httpDeleteAllTodo = (req, res) => {
  todoModel.deleteMany({}, (err, toDo) => {
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
  httpGetTodo,
  httpAddTodo,
  httpUpdateTodo,
  httpDeleteTodo,
  httpDeleteAllTodo,
};
