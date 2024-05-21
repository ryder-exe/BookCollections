const { json } = require("express");
const Book = require("../models/bookModel");

//This will handle all the book's Data
const bookData = async (req, res, next) => {
	let data;
	try {
		data = await Book.find();
	} catch (e) {
		console.log(e);
	}

	if (!data) {
		return res.status(404).json({ message: "No book found" });
	}
	return res.status(200).json({ data });
};

//This will handle the Bood Add
const addBooks = async (req, res, next) => {
	const { name, author, genre, year } = req.body;
	let x;
	try {
		x = new Book({
			name,
			author,
			genre,
			year,
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

exports.getId = getId;
exports.addBooks = addBooks;
exports.bookData = bookData;
