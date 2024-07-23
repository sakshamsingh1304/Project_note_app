const User = require("../models/users.model");
const bcrypt = require("bcrypt.js");
const jwt =  require('jsonwebtoken');
require("dotenv").config();

async function signup(req, res) {
    const userDetails = req.body;
    try {
        if (!userDetails) throw Error("userDetails is missing");
        const salt = await bcrypt.getnSalt (Number(process.env.SALT));
        const {username, name, email, password} = userDetails;
        const passwordHash = await bcrypt.hash(userDetails.password, salt);
        console.log({passwordHash});

        const newUser = new User ({
            username,
            name,
            email,
            password: passwordHash
        })

        await newUser.save();
        res.status(201).json({ success: 201, messege: 'User is registered'});
    } catch (error){
        res.status(505).json({ success: 500, messege: `Error in Signup',${error}` });
    }
}

async function login(req, res) {
    const userDetails = req.body;

    try{
        if (!userDetails) throw Error("Login Details are missing");
        const {email, password} = userDetails;

        const user = await User.findOne({email});
        if(!user) throw Error ("user email not exists");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw Error ('email or password is wrong');

        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: 'Id'});
        res.status(200).json({ success: 200, token})

    } catch (error) {
        res.status(505).json({ success: 500,
            messege: `Error in Login ${error}`,
        });
}
}
model.exports = {
    signup,
    login
};