const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middleware/isLoggedIn");
const { createTask, updateTask, deleteTask, getTask, getAllTask } = require("../controllers/taskController");
const { upload } = require("../middleware/documentUpload");

router.post("/create", isLoggedIn, upload.single('file'), createTask);
router.put("/:id", isLoggedIn, updateTask);
router.delete("/:id", isLoggedIn, deleteTask);
router.get("/:id", isLoggedIn, getTask);
router.get("/", isLoggedIn, getAllTask);

module.exports = router;