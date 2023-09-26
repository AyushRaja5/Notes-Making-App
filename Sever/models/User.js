import mongoose, {model} from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        // default : String(Math.floor(Math.random()*100)) 
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    date : {
        type : Date,
        default : Date.now()
    }
});

export default model('user', UserSchema)