// Import express
const express = require("express");

// Import functions from controllers
const {
  Register,
  Login,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

// Create the router
const router = express.Router();

// User registration route
router.post("/register", Register);

// User login route
router.post("/login", Login);

// Get user information route
router.get("/users/:userId", getUser);

// Update user information route
router.put("/users/:userId", updateUser);

// Delete user route
router.delete("/users/:userId", deleteUser);

// Export the router
module.exports = router;
