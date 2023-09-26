import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateNote() {

    const [title, settitle] = useState('');
    const [tag, settag] = useState('');
    const [description, setdescription] = useState('')
    const { id } = useParams()
    const navigate = useNavigate();

    const getNotebyId = async () => {
        const response = await axios.get(`http://localhost:5000/api/notes/getnotebyid/${id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        const usernote = response.data.shownote;
        console.log(usernote)

        settitle(usernote?.title);
        settag(usernote?.tag);
        setdescription(usernote?.description);
    }
    useEffect(() => {
        getNotebyId();
    }, [id])

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/notes/updatenote/${id}`, { title, tag, description },
                {
                    headers: {
                        'auth-token': localStorage.getItem('token')
                    }
                })

            const updatednote = response.data;
            if(updatednote.error){
                console.log(updatednote.error)
            }
            else{
                console.log(updatednote)
                navigate('/')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className=' lg:mx-[6em] mt-16 lg:mt-0 flex justify-center items-center h-screen'>
                <div className=' bg-[#d2cbbf] lg:w-[60em] lg:h-[35em]  rounded-xl p-10   '>
                    <div className="">

                        {/* Top Heading  */}
                        <div className=" mb-5">
                            <h1 className='text-center text-black text-xl  font-bold'>
                                Update Note
                            </h1>
                        </div>

                        {/* Input 1  */}
                        <div>
                            <input type="text"
                                name='title'
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                                className='inputShadow
                                 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Title'
                            />
                        </div>

                        {/* Input 2  */}
                        <div>
                            <input type="text"
                                name='tag'
                                value={tag}
                                onChange={(e) => settag(e.target.value)}
                                className='inputShadow
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Tag'
                            />
                        </div>

                        {/* TextArea 3  */}
                        <div>
                            <textarea
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                name="" id="" cols="30" rows="10" className='inputShadow
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Description'>
                            </textarea>
                        </div>

                        {/* Button  */}
                        <div className=' flex justify-center mb-3'>
                            <button
                                onClick={handleUpdate}
                                className=' bg-[#000000] w-full text-white font-bold  px-2 
                                py-2.5 rounded-md'>
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateNote