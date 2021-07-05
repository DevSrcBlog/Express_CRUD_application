const express = require("express");
var shortid = require("shortid");
const app = express();
app.use(express.json());

const todos = [];

app.delete("/todos/:todoId", (req, res) => {});

app.patch("/todos/:todoId", (req, res) => {});

app.put("/todos/:todoId", (req, res) => {
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
});

app.get("/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((todo) => todo.id === todoId);
  return res.status(201).json(todo);
});

app.get("/todos", (req, res) => {
  const result = todos.map((todo) => ({ id: todo.id, text: todo.text }));
  return res.status(200).json(result);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const todo = {
    id: shortid(),
    text,
    isCompleted: false,
    created: new Date(),
  };

  todos.push(todo);

  res.status(201).json({ message: "todos created succesful", ...todo });
});

// route
app.get("/", (req, res) => {
  res.send("I am alive");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

/**
 * HTTP Protocol
 * HTTP Verbs or Methods
 * - GET (get a list of data or single object of data)
 * - POST (create new resources)
 * - PUT (Update -> whole object)
 * - PATCH (Update -> update specific propertices)
 * - DELETE (Delete the resource)
 *
 * - Resource URI
 *  - GET (/books)
 *  - POST (/books)
 *  - GET a single (/books/bookId)
 *  - PUT/PATCH (/books/bookId)
 *  - DELETE (/books/bookId)
 *
 */
