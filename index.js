const express = require("express");
const app = express();

// route
app.get("/", (req, res) => {
  console.log(req.query);
  res.send(`Category: ${req.query.category}, Featured: ${req.query.featured} `);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
