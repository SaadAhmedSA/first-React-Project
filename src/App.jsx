import React,{ useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './button'



function App() {
  const todoval = useRef()
  const [todo,settodo]=useState([])
let [z , setz] =useState(0)


const Addtodo = (event)=>{
event.preventDefault()
console.log(todoval.current.value);
todo.push(todoval.current.value)
settodo([...todo])
todoval.current.value=""

}
const deleteTodo = (index) => {
  console.log('todo deleted', index);
  todo.splice(index , 1);
  settodo([...todo])
}

const editTodo = (index)=>{
  const updatedValue = prompt('enter updated value')
  todo.splice(index , 1,updatedValue);
  settodo([...todo])
}

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


<br /><br />
 
     <form onSubmit={Addtodo}>
        <input type="text" placeholder='Enter Text' ref={todoval} />
        <button type='submit'>Addtodo</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={()=>editTodo(index)}>Edit</button>
          </li>
        })}
      </ul>

     </div>
 
  )
}

export default App
