const Book = require("../Books/bookModel");

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    return res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error creating book", error: error });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().sort({ createdAt: -1 });

    return res.status(200).send(allBooks);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error fetching book", error: error });
  }
};
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }

    return res.status(200).send(book);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error fetching book", error: error });
  }
};
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBook) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send({ message: "book update successfully", updateBook });
  } catch (error) {
    return res.status(500).send({ message: "Error update book", error: error });
  }
};
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteBook = await Book.findOneAndDelete({ _id: id });
    console.log(deleteBook);
    if (!deleteBook) {
      return res.status(404).send("Book not found");
    }
    return res
      .status(200)
      .send({ message: "book delete successfully", deleteBook });
  } catch (error) {
    return res.status(500).send({ message: "Error update book", error: error });
  }
};
//677129e491a7e8999aeed6e6
module.exports = {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
