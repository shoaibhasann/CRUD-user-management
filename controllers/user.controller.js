// Import mongoose
const mongoose = require('mongoose');
// Import user model
const User = require('../models/user.model.js');

// register user route

exports.Register = async (req,res) => {
        try {
       // extract information about user from request body
       const{username,useremail,password,createdAt} = req.body;

       // check if all fields are required
       if(!username || !useremail || !password){
             throw new Error('all input fields are required');
       }
       
       // check if user with given email exists
       const userExists = await User.findOne({useremail});
       if(userExists){
             throw new Error('user already exits');
       }

       // create new user using User model
       const user = await User.create({
             username,
             useremail,
             password,
             createdAt: new Date().toLocaleString(),
       });

       // send response to user
       res.status(201).json({
            message: 'User registered successfully'
       })
        } catch (error) {
            res.status(501).json({
                message: error.message,
            })
        }
}

// login user route

exports.Login = async (req,res) => {
      try {
            // extract login credentials from request body
            const {useremail,password} = req.body;

            // check if all fields are required
            if(!useremail || !password){
                  throw new Error('All input fields are required');
            }

            // check if user with given email exists
            const userExists = await User.findOne({useremail});
            if(!userExists){
                  throw new Error('No account associate with this email');
            }

            // check if the provided password matches with the stored password
            if(userExists.password !== password){
                  throw new Error('Password is wrong');
            }
            else{
                  res.status(200).json({
                        message: 'User login successfully'
                  });
            }
      } catch (error) {
            res.status(401).json({
                  error: error.message,
            });
      }
};

// retrieve user route

exports.getUser = async (req,res) => {
      try {
        // get user id
        const userId = req.params.userId;

        // Validate if the userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            res.status(400).json({
            success: false,
            message: "Invalid user ID",
          });
        }

        // find user with given user id
        const user = await User.findById(userId);

        // If the user is not found, return an error response
        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }

        // if user found then return user information
        res.status(201).json({
          success: true,
          user,
        });
      } catch (error) {
            res.status(500).json({
                  success: false,
                  message: error.message,
            })
      }
}

// Update user route

exports.updateUser = async (req,res) => {
        try {
          // get user ID from request parameters
          const userId = req.params.userId;
          // update data from request body
          const updateData = req.body;

          // check if user with the provided ID exists
          const user = await User.findById(userId);
          if (!user) {
            res.status(404).json({
              success: false,
              message: "User not found",
            });
          }

          // update user information
          const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
          });

          // response user updated successfully
          res.status(200).json({
            sucess: true,
            message: "User updated successfully",
            user: updatedUser,
          });
        } catch (error) {
            res.status(500).json({
                  success: false,
                  message: error.message,
            })
        }

}

// Delete user route

exports.deleteUser = async (req,res) => {
        try {
            // get user ID from request parameters
            const userId = req.params.userId;
          // Find the user by ID and delete
          const user = await User.findByIdAndDelete(userId);

          if (!user) {
            // User not found
            return res.status(404).json({
              success: false,
              error: "User not found",
            });
          }

          // User deleted successfully
          res.status(200).json({
            success: true,
            message: "User deleted successfully",
          });
        } catch (error) {
            res.status(500).json({
                  success: false,
                  message: error.message,
            })
        }
}
