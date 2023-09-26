import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      })

      const logindata = response.data;

      if (response.status === 400) {
        // Server responded with a 400 status code (Bad Request)
        setError('Invalid email or password. Please try again.'); // Set a custom error message
        alert('Invalid email or password. Please try again.'); // Show an alert
      } 
      else if (logindata.error){
        setError(logindata.error);
        alert(error)
      }
      else {
        navigate('/')
        console.log('login Successful')
        console.log(logindata.token)
        localStorage.setItem('token', logindata.token)
      }
    }
    catch (err) {
      console.log(err)
      console.log(error)
    }
    setEmail('')
    setPassword('')
  }
  return (
    <div className=' flex justify-center items-center h-screen'>

      {/* main div  */}
      <div className=' bg-[#d2cbbf] shadow-md px-10 py-10 rounded-xl '>

        {/* Top Heading  */}
        <div className="">
          <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
        </div>

        {/* Input 1 Email  */}
        <div>
          <input
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=' bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
            placeholder='Email'
          />
        </div>

        {/* Input 2 Password  */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
            placeholder='Password'
          />
        </div>

        {/* Button For Login  */}
        <div className=' flex justify-center mb-3'>
          <button
            onClick={handleLogin}
            className=' bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg'>
            Login
          </button>
        </div>

        {/* Link for Signup  */}
        <div>
          <h2 className='text-black'>Don't have an account <Link className=' text-red-700 font-bold' to={'/signup'}>Signup</Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Login