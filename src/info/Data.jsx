import React from 'react'

export default function Data({ data }) {
  return (
    <div className='flex flex-col justify-around h-[100%] lg:text-lg md:text-md'>
        <div className='text-white text-[30px]'>{data.name}</div>
        <div>
          <div className='flex text-white justify-between'>
           <div>Species: </div>
           <div>{data.species}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Gender: </div>
            <div>{data.gender}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>House: </div>
            <div>{data.house}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>DOB: </div>
            <div>{data.dateOfBirth}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Ancestry: </div>
            <div>{data.ancestry}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Eye Colour: </div>
            <div>{data.eyeColour}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Hair Colour: </div>
            <div>{data.hairColour}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Wand: </div>
            <div>{data.wand['wood']}, {data.wand['core']}</div>
          </div>
          <div className='flex text-white justify-between'>
            <div>Patronus: </div>
            <div>{data.patronus}</div>
          </div>
        </div>
    </div>
  )
}
