var shortid = require("shortid");
const todos = [];

exports.create = (req, res) => {
  const { text } = req.body;
  const todo = {
    id: shortid(),
    text,
    isCompleted: false,
    created: new Date(),
  };

  todos.push(todo);

  res.status(201).json({ message: "todos created succesful", ...todo });
};

exports.findAll = (req, res) => {
  const result = todos.map((todo) => ({ id: todo.id, text: todo.text }));
  return res.status(200).json(result);
};

exports.findById = (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((todo) => todo.id === todoId);
  return res.status(201).json(todo);
};

exports.putUpdateById = (req, res) => {
  // if the item is not exist the then create one
  // if it exist then update
  const { text, isCompleted } = req.body;
  const { todoId } = req.params;
  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    // will be new create
    const todo = {
      id: shortid(),
      text,
      isCompleted: false,
      created: new Date(),
    };
    todos.push(todo);
    res.status(201).json({ message: "updated new todos created", ...todo });
  } else {
    // update
    (todo.text = text || todo.text),
      (todo.isCompleted = isCompleted || todo.isCompleted);

    const index = todos.findIndex((todo) => todo.id === todoId);

    todos[index] = todo;
    res.status(201).json({ message: "todos updated", ...todo });
  }
};

exports.patchUpdateById = (req, res) => {
  const { todoId } = req.params;
  const { text, isCompleted } = req.body;

  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos[index].text = text || todos[index].text;
  todos[index].isCompleted = isCompleted || todos[index].isCompleted;

  res
    .status(201)
    .json({ message: "Todo updated succesfully", ...todos[index] });
};

exports.deleteTodos = (req, res) => {
  const { todoId } = req.params;
  const index = todos.findIndex((todo) => todo.id === todoId);
  todos.slice(index, 1);
};
