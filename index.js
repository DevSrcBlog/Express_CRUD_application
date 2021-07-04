const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

// route
app.get("/", (req, res) => {});

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
