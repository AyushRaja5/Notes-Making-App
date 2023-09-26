import React from 'react'
import Layout from '../../components/layout/Layout'
import NotesCard from '../../components/noteCard/NoteCard'
import './home.css'
const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Layout />
      <div className='home' style={{width:'100%'}}>
          <NotesCard/>
      </div>
    </div>
  )
}

export default Home