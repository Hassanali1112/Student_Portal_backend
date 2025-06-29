const jwt = require("jsonwebtoken");
const User = require("../models/users.models");
require("dotenv").config();


// check validation of token 

const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = async (req, res, next) => {

  try {

    const authorizedHeader = req.headers.authorization

    if(!authorizedHeader || !authorizedHeader.startsWith('Bearer ')){
      return res.status(404).send({message: 'Unauthorized! Access Denied'})
  }

  const token = authorizedHeader.split(" ")[1]

  const tokenVerified = jwt.verify(token, JWT_SECRET)

  console.log(tokenVerified)

  const userFound = await User.findById(tokenVerified.userId).select("-password")

  if(!userFound){
    res.status(301).json({message : "User not found"})
  }

  req.user = userFound

    
  } catch (error) {
    res.status(301).json({message : "Invalid token"})
  }

}

module.exports = verifyToken