import React,{ useRef, useState } from 'react'
import { Button } from './button'



function App() {
 
let [z , setz] =useState(0)




  const add = ()=>{
setz(z+1)

  }
  const zero =()=>{
    setz(z=0)
  }
  
  const sub = ()=>{
   if(z>0){
    setz(z-1)
   
   }
      }
  
  return (
   
      
  <div>
        <h1>Hello World Project</h1>
<h1>Counter  {z}</h1>
<button onClick={add}>Add</button>
<button onClick={sub}>Sub</button>
<Button name="Zero" func={zero}/>



        
      
    
  </div>
  )
}

export default App
