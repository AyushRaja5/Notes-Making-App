import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function AddNote() {

    const context = useContext(myContext);
    const { title, settitle, description, setdescription, tag, settag, addnotes } = context

    return (
        <Layout>
            <div className=' lg:mx-[6em] mt-16 lg:mt-0 flex justify-center items-center notebox' style={{ width: '70%' }}>
                <div className=' bg-[#d2cbbf] lg:w-[60em] lg:h-[35em]  rounded-xl p-10  justify-center items-center' style={{ width: '70%', height: '50%' }}>
                    <div className="">

                        {/* Top Heading  */}
                        <div className=" mb-5">
                            <h1 className='text-center text-black text-xl  font-bold'>
                                Add Notes
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
                            <textarea name="" id="" cols="30" rows="10" className='inputShadow
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                placeholder='Description'>
                            </textarea>
                        </div>

                        {/* Button  */}
                        <div className=' flex justify-center mb-3'>
                            <button
                                onClick={addnotes}
                                className=' bg-[#000000] w-full text-white font-bold  px-2 
                                py-2.5 rounded-md'>
                                Add Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddNote