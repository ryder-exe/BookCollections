const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db.js");
const router = require("./routes/routeBook.js");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/books", router);

app.listen(process.env.PORT, () => {
	connection();
	console.log("Server is Online");
});
