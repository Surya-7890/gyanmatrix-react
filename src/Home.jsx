import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Grid from './home/Grid';

export default function Home() {
    const { target } = useParams();
    const navigate = useNavigate();
  return (
    <div className='h-screen w-screen bg-[#F6DEFF]'>
    <div className='flex justify-between items-center md:h-[15%] h-[20%] flex-col md:flex-row'>
        <img src='/login/73.png' className='sm:w-44 sm:h-24'/>
        <div className='flex'>
            <img src='/login/stafflogo.png' className='cursor-pointer md:w-56 w-44 h-20' onClick={() => navigate('/home/staff')}/>
            <img src='/login/studentlogo.png' className='cursor-pointer md:w-56 w-44 h-20' onClick={() => navigate('/home/student')}/>
        </div>
    </div>
    <div className='flex justify-center h-[85%]'>
        <Grid target={target}/>
    </div>
    </div>
  )
}
