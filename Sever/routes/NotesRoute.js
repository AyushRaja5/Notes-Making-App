import express from 'express'
import fetchuser from '../middleware/fetchuser.js'
import NotesModelSchema from '../models/Notes.js'

const router = express.Router()

router.get('/fetchallnotes', fetchuser, async(req, resp)=>{

    try{
        const notes = await NotesModelSchema.find({user: req.userId});
        resp.json(notes)
    }
    catch(error){
        resp.status(400).send("Error from fetchallnotes route server", error);
    }
})

router.post('/addnote', fetchuser, async(req, resp)=>{
    try{
        const {title, tag, description} = req.body;

        const note = new NotesModelSchema({
            user : req.userId,
            title,
            tag,
            description,
        })
        const savednotes = await note.save();
        resp.json(savednotes);
    }
    catch(error){
        resp.status(400).json({err: error})
    }
})

router.put('/updatenote/:id', fetchuser, async(req, resp)=>{
    const {title, tag, description} = req.body;
    const {id} = req.params
    try{
        let note = await NotesModelSchema.findById({_id : id});
        
        if(!note) return resp.status(300).send("Note not found");

        if(note.user.toString() !== req.userId) return resp.send("Wrong User trying to update")

        console.log(note);

        const updatedNote = await NotesModelSchema.findByIdAndUpdate(
            id,
            { $set: { title, description, tag } },
            { new: true }
        );
        resp.json({updatedNote, success:"Note Updated Successfully"});
    }
    catch(error){
        resp.json({err: error});
    }
})


router.delete('/deletenote/:id',fetchuser, async(req, resp)=>{
    try{
        const noteid = req.params.id
        console.log("Note id : ",noteid)
        const note = await NotesModelSchema.findById(noteid);

        if(!note) return resp.send("Note do not exist with this number")

        if(note.user.toString() !== req.userId)
            return resp.send("You can not Delete Note not a valid user")

        const deletednote = await NotesModelSchema.findByIdAndDelete(noteid)

        resp.json({deletednote, message: "Note deleted Successfully"});
    }
    catch(error){
        resp.status(400).json({message: error});
    }
})

router.get('/getnotebyid/:id', fetchuser, async(req, resp)=>{
    try{
        const noteid = req.params.id;
        const note = await NotesModelSchema.findById(noteid)

        if(!note) resp.send("Note with this id is not available")

        if(note.user.toString() !== req.userId)
            resp.send("You can not see note not a valid user");

        const shownote = await NotesModelSchema.findById(noteid);
        resp.json({shownote, message: "Message showed successfull"});
    }
    catch(error){
        resp.status(400).send({message: error})
    }
})

export default router