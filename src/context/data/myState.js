import React, { useState } from 'react'
import myContext from './myContext'
import  axios from 'axios'
const MyState = (props) => {
  const [loading, setLoading] = useState(false);
  const[allnotes, setAllnotes] = useState([]);
  const getallnotes = async() =>{
    setLoading(true)
    try{
      const response = await axios.get('http://localhost:5000/api/notes/fetchallnotes',{
        headers:{
          'auth-token' : localStorage.getItem('token')
        }
      })
      const notes = response.data;
      // console.log(notes)
      setAllnotes(notes);
      setLoading(false)
    }
    catch(error){
      console.log(error);
      setLoading(false)
    }
  }
  
  const[title, settitle] = useState('');
  const[description, setdescription] = useState('')
  const[tag, settag] = useState('')

  const addnotes = async() => {
      const response = await axios.post('http://localhost:5000/api/notes/addnote',{ title, description, tag},
        {
          headers:{
            'auth-token' : localStorage.getItem('token')
          }
        });
      const addednote = response.data;
      console.log(addednote);
      getallnotes();

      if(addednote.error){
        console.log('Note not added'+ addednote.error)
      }
      else console.log('Note Added')
      
      settitle('')
      settag('')
      setdescription('')

  }

  const deleteNote = async(id) =>{
    const response = await axios.delete(`http://localhost:5000/api/notes/deletenote/${id}`,{
      headers:{
        "auth-token" : localStorage.getItem('token')
      }
    })
    
    const deletedNote = response.data
    console.log(deletedNote)
    getallnotes();
    console.log('Note Deleted')
  }
  return (
        <myContext.Provider value={{allnotes, loading, getallnotes, title, settitle, description, setdescription, tag, settag, addnotes, deleteNote}}>
            {props.children}
        </myContext.Provider>
  )
}

export default MyState