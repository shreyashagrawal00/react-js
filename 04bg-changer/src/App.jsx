import { useState } from "react"

function App() {
  const [color,setcolor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{background:color}}>

      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 p-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
         rounded-xl ">
          <button onClick={()=> setcolor("red")}
          className="outline-none px-4 py-2 rounded-full shadow-xl text-white"
          style={{background:"red"}} >Red</button>
          <button onClick={()=> setcolor("green")} 
           className="outline-none px-4 py-2 rounded-full shadow-xl text-white"
          style={{background:"green"}} >green</button>
          <button onClick={()=> setcolor("blue")}
           className="outline-none px-4 py-2 rounded-full shadow-xl text-white"
          style={{background:"blue"}} >Blue</button>
          <button onClick={()=> setcolor("pink")}
           className="outline-none px-4 py-2 rounded-full shadow-xl text-white"
          style={{background:"pink"}} >Pink</button>
          <button onClick={()=> setcolor("aqua")} 
          className="outline-none px-4 py-2 rounded-full shadow-xl text-white"
          style={{background:"aqua"}} >Aqua</button>
         </div>
      </div>

    </div>
  )
}

export default App
