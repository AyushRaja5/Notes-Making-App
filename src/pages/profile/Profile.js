import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import myContext from '../../context/data/myContext'
function Profile() {
    const[user, setuser] = useState([])
    
    const context = useContext(myContext)
    const {allnotes, } = context
    const userData = async() =>{
        try{
            const response = await axios.get('http://localhost:5000/api/auth/getuser',{
            headers:{
                'auth-token' : localStorage.getItem('token')
            }
        })

        const userinfo = response.data
            setuser(userinfo)
        }
        catch(error){
            console.log(error)
        }
    }
    console.log("User Notes length" + allnotes.length)
    useEffect(()=>{
        userData()
    }, [])
    return (
        <Layout>
            <div className="  mt-32 lg:mt-20 lg:mx-[30em]">
                <div className="flex items-center justify-center  mb-2">
                    <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="img" />
                </div>
                <h1 className='text-center font-semibold'>{user.name}</h1>
                <h1 className='text-center font-semibold'>{user.email}</h1>
                <h1 className='text-center font-semibold'>Total Notes Created : {allnotes.length}</h1>
            </div>
        </Layout>
    )
}

export default Profile