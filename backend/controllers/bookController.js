const Book = require("../models/bookModel");

//This will handle all the book's Data
const bookData = async (req, res, next) => {
	let books;
	try {
		books = await Book.find();
	} catch (e) {
		console.log(e);
	}

	if (!books) {
		return res.status(404).json({ message: "No book found" });
	}
	return res.status(200).json({ books });
};

//This will handle the Bood Add
const addBooks = async (req, res, next) => {
	const { name, author, genre, year, image } = req.body;
	let x;
	try {
		x = new Book({
			name,
			author,
			genre,
			year,
			image,
		});
		await x.save();
	} catch (e) {
		console.log(e);
	}

	if (!x) {
		return res.status(500).json({ message: "Data is not addded!" });
	}
	return res.status(201).json({ x });
};

//This will handle the Book ID
const getId = async (req, res, next) => {
	const id = req.params.id;
	let x;
	try {
		x = await Book.findById(id);
	} catch (e) {
		console.log(e);
	}
	if (!x) {
		return res.status(404).json({ message: "No book found!!" });
	}
	return res.status(201).json({ x });
};

//This will handle the Update Book
const updateBook = async (req, res, next) => {
	const id = req.params.id;
	const { name, author, genre, year, image } = req.body;
	let x;
	try {
		x = await Book.findByIdAndUpdate(id, {
			name,
			author,
			genre,
			year,
			image,
		});
		x = await x.save();
	} catch (e) {
		console.log(e);
	}
	if (!x) {
		return res.status(404).json({ message: "Book is not Updated!!" });
	}
	return res.status(200).json({ x });
};

//This will handle the delete Book
const deleteBook = async (req, res, next) => {
	const id = req.params.id;
	let x;
	try {
		x = await Book.findByIdAndDelete(id);
	} catch (e) {
		console.log(e);
	}
	if (!x) {
		return res.status(404).json({ message: "Book is not deleted!!" });
	}
	return res.status(200).json({ message: "Book is deleted" });
};

exports.getId = getId;
exports.addBooks = addBooks;
exports.bookData = bookData;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
