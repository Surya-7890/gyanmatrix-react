import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Left() {

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const verify = (e) => {
    e.preventDefault();
    const key = localStorage.getItem('email');
    const value = localStorage.getItem('password');
    console.log(key, value)
    if (email === key && password === value) {
      navigate('/home/student')
    } else if (email === "" || password === "") {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1500)
    }
  }

  return (
    <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col z-20 brightness-[0.3]'>
        <div className='md:h-[20%] h-[45%]'>
            <img src='/login/73.png' className='brightness-[0.5] md:h-[100px] h-[70px]' />
        </div>
        <div className='md:h-[80%] h-[55%]'>
          <form className='flex flex-col space-y-16 w-[100%] h-[80%] justify-center items-center' onSubmit={verify}>
            <div className='font-extrabold text-[50px] text-white'>Login</div>
            <div className='flex flex-col space-y-3 w-[100%] justify-center items-center'>
              <input id='email' type='text' value={email} placeholder='Your Email' className='w-[50%] h-10 focus:outline-none px-5 placeholder:text-black rounded-md focus:border-[3px] border-green-500 text-xl' onChange={(e) => setEmail(e.target.value)}/>
              <input id='password' type='text' value={password} placeholder='Your Password' className='w-[50%] h-10 focus:outline-none px-5 placeholder:text-black rounded-md focus:border-[3px] border-green-500 text-xl' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className='bg-orange-600 text-white w-[50%] rounded-[50px] hover:bg-orange-500 text-xl py-2'>Submit</button>
          {
            error && <div className='text-[30px] text-white'>Invalid Credentials</div>
          }
        </form>
        </div>
    </div>

  )
}
