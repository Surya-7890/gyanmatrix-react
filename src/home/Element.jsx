import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Element({element, target}) {
  const format = target === 'student' ? '.jpg' : '.png'
  const navigate = useNavigate();
  const getInfo = () => {
      navigate(`/info/${target}:${element}`)
  }

  const getData = () => {
  }

  return (
      <div className='w-82 h-64 flex justify-center items-center cursor-pointer' onClick={getInfo}>
        <img src={`/${target}/${element + format}`} className='h-[95%]' />
      </div> 
  )
}
