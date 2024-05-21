const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db.js");
const router = require("./routes/routeBook.js");

dotenv.config();

const app = express();
dotenv.config();

// Contain all routes here
app.use(express.json());
app.use("/books", router);

app.listen(process.env.PORT, () => {
	connection();
	console.log("Server is Online");
});
