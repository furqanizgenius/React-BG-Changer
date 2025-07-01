import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col' style={{ backgroundColor: color }}>
        <div className=' w-[70vw] flex justify-between flex-wrap  gap-3 shadow-2xl border border-amber-900 p-3 rounded-3xl bg-black'>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 border-0 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>Gray</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "aqua" }} onClick={() => setColor("aqua")}>Aqua</button>
          <button className='w-full md:w-auto rounded-2xl px-6 py-2 hover:cursor-pointer hover:opacity-90 text-white' style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>Brown</button>
        </div>

      </div>
    </>
  )
}

export default App
