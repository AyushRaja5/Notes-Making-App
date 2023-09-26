import { connect } from "mongoose";

const url =  "mongodb+srv://AyushRaja:12345@merndatabase.cap6mjs.mongodb.net/eNotebook"

const connectToMongo = async() =>{
    try{
        await connect(url)
        console.log("Db Connected Successfully")
    }
    catch(error){
        console.log(error);
    }
}

export default connectToMongo;