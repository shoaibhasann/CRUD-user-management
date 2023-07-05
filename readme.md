# User Management Backend CRUD App

This is a backend application for managing user data, built using Express.js, Mongoose, and MongoDB. It provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on user records.

## Features

- User Registration: Allows users to create an account with a unique username, email, and password.
- User Login: Enables user authentication by verifying email and password.
- Retrieve User: Provides endpoints to fetch user information by user ID.
- Update User: Allows updating user details such as username and email and password.
- Delete User: Enables deleting user accounts.

## Technologies Used

- Express.js: A fast and minimalist web framework for Node.js used for routing and handling HTTP requests.
- Mongoose: An Object-Data Modeling (ODM) library for MongoDB that provides a straightforward way to interact with the database.
- MongoDB: A NoSQL database used for storing user records.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running locally or on a remote server.
 
### Installation

1. Clone the repository:

```bash
git clone https://github.com/shoaibhasann/CRUD-user-management.git

Configure the MongoDB connection:

Open the .env file and replace the value of MONGO_URI with your MongoDB connection string.
Start the server: npm run start
By default, the server will start on http://localhost:6000.

API Endpoints:
- `POST /register`: Creates a new user by providing a username, email, and password.
- `POST /login`: Authenticates a user by verifying their email and password.
- `GET /users/:userId`: Retrieves user information by providing the user's ID.
- `PUT /users/:userId`: Updates user information by providing the user's ID and new data.
- `DELETE /users/:userId`: Deletes a user account by providing the user's ID.

Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

Contact
For any inquiries or suggestions, please contact shoaibhasan0940@gmail.com.

