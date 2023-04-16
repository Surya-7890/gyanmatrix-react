import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './info/Card'
import { students, staffs } from '../data'

export default function Info() {
    const { id } = useParams()
    const [target, name] = id.split(':')

    const [person, setPerson] = React.useState([]);
    const [isloading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getData();
      }, [])
      
      const getData = async() => {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/${target === 'student'? 'students' : 'staff'}`) 
        const data = await res.json();
        console.log(data)
        const getPerson = target === 'student'? data.find(element => element.name === students[name]): data.find(element => element.name === staffs[name])
        setPerson(getPerson);
        setIsLoading(false)
    }

    if (isloading) {
      return <div>Loading....</div>
    }

  return (
    <>
    {person && <div className={`h-screen w-screen ${person.house === 'Gryffindor'? 'bg-[#9C1801]': person.house === 'Slytherin'? 'bg-[#148341]': person.house === 'Hufflepuff'? 'bg-[#E8AF17]': 'bg-[#3DB2D3]'}` }>
        <div className='h-[15%]'><img src='/login/73.png' /></div>
        <Card data={person} />
    </div>
    }
    </>
  )
}
