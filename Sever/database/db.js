import { connect } from "mongoose";

const url =  "mongodb+srv://AyushRaja:*****@merndatabase.cap6mjs.mongodb.net/eNotebook"

const connectToMongo = async() =>{
    try{
        await connect(url)
        console.log("Db Connected Successfully p(1-5)")
    }
    catch(error){
        console.log(error);
    }
}

export default connectToMongo;
