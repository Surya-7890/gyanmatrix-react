import React from 'react'
import Element from './Element'

export default function Grid({ target }) {
    const array = ['1', '2', '3', '4', '5', '6']
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-20 bg-[#CDCFEE] md:w-[70%] h-[95%] px-5'>
        {target === 'students' ?
            array.map((element, index) => {
                return <Element element={element} key={index} target={target} />
            })            
            :
            array.map((element, index) => {
                return <Element element={element} key={index} target={target} />
            })   
        }
    </div>
  )
}
