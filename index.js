// Import Express application
const app = require('./app.js');

// Import dotenv module
require('dotenv').config();

// Set the port number
const port = process.env.PORT || 8000

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
