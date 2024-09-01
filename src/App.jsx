import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  let arr = ["red","blue","green","yellow", "purple"]
  

  return (
    <>
    <div className={`w-full h-screen`} style={{backgroundColor: color}}>
      <div className=' fixed top-[5%] left-[50%] -translate-x-1/2 bg-white rounded-xl flex gap-5 px-5 py-2 border-2 border-zinc-900 '>
      {arr.map((item,index) =>(
      <button style={{backgroundColor: item}} onClick={(e)=>{setColor(e.target.innerText)}} className={`font-bold text-white   px-4 py-1 rounded-xl`} >{item}</button> 
    ))}
      </div>
    </div>
    </>
  )
}

export default App
