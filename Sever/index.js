import express from "express";
import connectToMongo from "./database/db.js";
import AuthRoute from './routes/Auth.js'
import NotesRoute from './routes/NotesRoute.js'
import cors from 'cors'

connectToMongo();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json())
app.use(cors())

app.use('/api/auth', AuthRoute);
app.use('/api/notes', NotesRoute);

app.get('/', (req, resp)=>{
    resp.send("<h1>Hii I am get from / route</h1>")
})


app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log('Server is running on port :', PORT);
})