const express = require("express");
const router = express.Router();
const bookcontroller = require("../controllers/bookController");

router.get("/", bookcontroller.bookData);
router.post("/", bookcontroller.addBooks);
router.get("/:id", bookcontroller.getId);

module.exports = router;
