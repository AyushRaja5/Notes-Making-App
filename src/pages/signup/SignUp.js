import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const navigate = useNavigate()
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSignup = async () => {
        const res = await axios.post('http://localhost:5000/api/auth', {
            name,
            email,
            password
        });
        const signupdata = await res.data

        if (signupdata.error)
            console.log(signupdata.error)
        else {
            // console.log(signupdata)
            navigate('/login')
        }
        setname('')
        setemail('')
        setpassword('')
    }

    return (
        <div className=' flex justify-center items-center h-screen'>

            {/* main div  */}
            <div className=' bg-[#d2cbbf] shadow-md px-10 py-10 rounded-xl '>

                {/* Top Heading  */}
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Signup</h1>
                </div>

                {/* Input 1 Name  */}
                <div>
                <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className='bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Name'
                    />
                </div>

                {/* Input 2 Email  */}
                <div>
                <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className='bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Email'
                    />
                </div>

                {/* Input 3 Password  */}
                <div>
                <input
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className='bg-[#beb9b1] border border-red-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Password'
                    />
                </div>

                {/* Button For Signup  */}
                <div className=' flex justify-center mb-3'>
                    <button onClick={handleSignup}
                        className='bg-red-700 w-full text-white font-bold px-2 py-2 rounded-lg'
                    >
                        Signup
                    </button>
                </div>

                {/* Link For Login  */}
                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-green-700 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup