import mongoose, {model} from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const notesSchema = new mongoose.Schema({
    user : {
        type : ObjectId,
        ref : 'user'
    },
    title : {
        type : String,
        required : true
    },
    tag : {
        type : String,
        default : "General"
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

export default model("notesmodel", notesSchema);