const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

// route
app.get("/", (req, res) => {
  console.log(req.query);

  console.log(req.cookies); // with cookie parser package
  console.log(req.headers.cookie); // without cookie perser package

  res.send(`Category: ${req.query.category}, Featured: ${req.query.featured} `);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
