// ---------------------------------------------------------------
const express = require("express");
const app = express();
const PORT = 8082;

//recieving incoming data from client
app.use(express.json());
// --------------------------------------------------------------

//ADDIND DATA INTO THE SERVER
const books = [
  { id: 1, title: "the great gatsby", aurthor: "A" },
  { id: 2, title: "king aurthor", aurthor: "B" },
  { id: 3, title: "merlin", aurthor: "C" },
  { id: 4, title: "the king cobra", aurthor: "D" },
];
//-----------------------------------------------------------
//HOme route
app.get("/", (req, res) => {
  res.json({
    status: "sucess",
    message: "Welcome to the book store API",
  });
});
//----------------------------------------------------------------
//fectching all the books
app.get("/books", (req, res) => {
  res.json({
    status: " sucess",
    message: "books fetched successfully",
    data: books,
  });
});
//-------------------------------------------------------------------
//creating or adding a new book
app.post("/books", (req, res) => {
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "book created scuuessful",
    data: books,
  });
});

//------------------------------------------------------------------
//fetching a perticular book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookfound = books.find((book) => book.id === id);
  if (!bookfound) {
    res.json({
      status: "unsuccessful",
      message: "book not found",
    });
  }
  res.json({
    status: "success",
    message: "book fetched",
    data: booksfound,
  });
});
// -------------------------------------------------------------------
//start the server
app.listen(PORT, console.log(`the server is running on ${PORT}`));
// ---------------------------------------------------------------
