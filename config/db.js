// Import the Mongoose module
const mongoose = require("mongoose");

// Import dotenv module
require('dotenv').config();

/**
 * Function to establish a connection to the database.
 */
const connectToDatabase = async () => {
  try {
    // Connect to the MongoDB database using the provided MONGO_URI
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process with a non-zero status code if the connection fails
  }
};

// Export the connectToDatabase function
module.exports = connectToDatabase;
