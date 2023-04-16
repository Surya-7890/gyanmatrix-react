import React from 'react'
import Data from './Data'

export default function Card({ data }) {
    const houses = {
        "Gryffindor": "#9C1801",
        "Slytherin": "#148341",
        "Hufflepuff": "#E8AF17",
        "Ravenclaw": "#3DB2D3"
    }
    console.log(data)
  return (
    <div className='h-[85%] w-[100%] flex justify-center'>
          <div className='lg:w-[50%] md:w-[70%] h-[90%] w-[100%] relative flex lg:flex-row-reverse md:flex-row-reverse flex-col border-black border-[20px]'>
            <div className='lg:w-[40%] lg:h-[100%] w-[100%] h-[30%] p-10 flex justify-center'>
              {data.name !== 'Albus Dumbledore' ?
                <img src={data.image} className='rounded-md lg:h-80 sm:h-50 md:h-60 0 h-40' /> 
                : 
                <img src='/1.png' className='rounded-md lg:h-80 sm:h-60 h-40' />}
            </div>
            <div className='lg:w-[60%] lg:h-[100%] h-[70%] w-[100%] p-5'>
              <img src={`/houses/${data.house}.png`} className='absolute lg:top-[-130px] lg:left-[35%] left-[30%] top-[-100px] h-[170px]'/>
              {data && <Data data={data}/>}
            </div>
        </div>
        </div>
        )
}
