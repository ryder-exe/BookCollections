const { mongoose, Schema } = require("mongoose");

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Book", bookSchema);
