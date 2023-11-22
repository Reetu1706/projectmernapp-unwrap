const jwt =require("jsonwebtoken");

const SECRET_KEY ="hhredrdcvbvnjuetbbklutdbgghjhjkkkkjkjcvbnkiu6yrh";

const generateToken = (userId)=>{
  const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"100hours"});
  return token;
}

const getUserIdFromToken=(token)=>{
  const decodedToken=jwt.verify(token, SECRET_KEY)
  return decodedToken.userId;
}

module.exports={generateToken, getUserIdFromToken}