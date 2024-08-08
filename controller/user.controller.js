// controllers/userController.js
const User = require('../models/user');

exports.insertUser = async (userData) => {
    try {
        // Create a new User instance
        const newUser = new User(userData);

        // Save the new user to the database
        await newUser.save();

        return { success: true, message: 'User has been created' };
    } catch (err) {
        return { success: false, message: err.message };
    }
};

exports.findUser=()=>{

	try{

		const user=User.findById(req.params.id );

		resizeBy.status(200).json(user);


	}catch(error){

		console.log(error) ;
;
	}
}
