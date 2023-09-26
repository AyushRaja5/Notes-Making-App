import jwt from "jsonwebtoken";
import 'dotenv/config'
const fetchuser = (req, res, next) =>{
    const token = req.header('auth-token')
    // const token = req.headers.authorization
 
    if(!token) res.status(401).send("Please authinticate valid token");

    try{
        const {userId} = jwt.verify(token, "" + process.env.JWT_SECRET)

        req.userId = userId
        // console.log("Fetched user :", userId);
        next();
    }
    catch(error){
        console.log("error from getuser");
        res.status(401).send("Please validate using valid token");
    }
}

export default fetchuser