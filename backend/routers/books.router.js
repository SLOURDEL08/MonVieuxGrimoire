const express = require("express");
const { checkToken } = require("../middleware/checkToken");
const multer = require("multer");
const { storage } = require("../middleware/storage");
const booksController = require("../controllers/books.controllers");
const bookRouter = express.Router();

bookRouter.post("/:id/rating", checkToken, booksController.postRating);
bookRouter.get("/", booksController.getBooks);
bookRouter.get("/bestrating", booksController.getBooksWithBestRating);
bookRouter.get("/:id", booksController.getBook);

bookRouter.delete("/:id", checkToken, booksController.deleteBook);

bookRouter.post("/", checkToken, multer({ storage: storage }).single("image"), booksController.postBooks);

bookRouter.put("/:id", checkToken, booksController.putBook);

module.exports = { bookRouter };
