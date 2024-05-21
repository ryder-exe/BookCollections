const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = async () => {
	try {
		mongoose.connect(process.env.URL);
		console.log("Database Connected");
	} catch (e) {
		console.log("Error : " + e);
	}
};

module.exports = connection;
