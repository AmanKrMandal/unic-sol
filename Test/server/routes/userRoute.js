const express = require("express");
const router = express.Router();
const {
    signinUser, signupUser, signoutUser, getUserProfile, getAllUserProfile
} = require("../controllers/userController");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/signout", signoutUser);
router.get("/me", isLoggedIn, getUserProfile);
router.get("/all", isLoggedIn, getAllUserProfile);
module.exports = router;