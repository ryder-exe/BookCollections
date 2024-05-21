const express = require("express");
const router = express.Router();
const bookcontroller = require("../controllers/bookController");

router.get("/", bookcontroller.bookData);
router.post("/", bookcontroller.addBooks);
router.get("/:id", bookcontroller.getId);
router.put("/:id", bookcontroller.updateBook);
router.delete("/:id", bookcontroller.deleteBook);

module.exports = router;
