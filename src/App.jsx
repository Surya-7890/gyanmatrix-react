import Backdrop from "./backdrop/Backdrop"
import Left from "./login/Left"
export default function App() {

  return (
    <div className='bg-[url("/login/bg.png")] brightness-[5] h-screen w-screen relative flex md:flex-row flex-col'>
      <Backdrop />
      <Left />
      <div className='md:w-[50%] w-[100%] h-[100%] flex justify-end items-end p-10'>
        <div>
          <img src="/login/38.png" className='h-6 object-contain'/>
        </div>
      </div>
    </div>
  )
}
