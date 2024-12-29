const express = require("express");
const router = express.Router();
const Book = require("../Books/bookModel");
const {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../Books/bookController");
const verifyAdminToken = require("../Middleware/verifyAdminToken");
//post book
router.post("/create-book", verifyAdminToken, postBook);
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/delete/:id", verifyAdminToken, deleteBook);

module.exports = router;
