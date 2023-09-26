import express from 'express'
const router = express.Router()
import  userModelSchema from  '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import 'dotenv/config.js'
import fetchuser from '../middleware/fetchuser.js'

router.get('/', async(req, resp)=>{
    try{
        const userdata =  await userModelSchema.find({}) 
        resp.json(userdata)
    }
    catch(error){
        console.log(error);
        resp.status(500).send('Internal Error')
    }
})

router.post('/', async (req, resp)=>{
    console.log(req.body);
    
    const {name, email, password} = req.body;
    const userexist = await userModelSchema.findOne({email});

    const salt = await bcrypt.genSalt(10); // Adding Salt to password

    const hashedPass = await bcrypt.hash(password, salt) // Hashing password with salt

    const user = userModelSchema({
        name,
        email,
        password : hashedPass
    });
    if(!userexist) user.save();
    else console.log("User Exist")
    resp.json({name, email, password});
})

router.get('/login', (req, resp)=>{
    resp.send("Login route called from auth page")
})

router.post('/login', async(req, resp)=>{
    const {email, password} = req.body;
    try{
        if(!email || !password) 
            return resp.status(400).send("Please enter email and password");
    
        const userdocument = await userModelSchema.findOne({email})

        if(!userdocument) 
            return resp.status(400).send("User not found");
        
        const passwordmatch = await bcrypt.compare(password, userdocument.password)

        // If password matches then generate token
        if(passwordmatch){
            const token = jwt.sign({userId: userdocument.id}, process.env.JWT_SECRET, {
                expiresIn: '1d'
            })
            resp.status(201).json({token})
        }
        else{
            resp.status(400).json({error : "Password Did not matched"})
        }
    }
    catch(error){
        console.log(error);
        resp.send("Internal Server Error")
    }
})

router.get('/getuser', fetchuser, async(req, resp)=>{
    try{
        const userId = req.userId;
        console.log("Get user ID : ", userId)
        const user = await userModelSchema.findById(userId).select("-password");
        resp.send(user);
    }
    catch(error){
        console.log(error);
        resp.status(504).send("Internal Server from Getuser")
    }
})

export default router