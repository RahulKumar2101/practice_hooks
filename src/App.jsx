import { useState } from 'react'
import './app.css'

function App() {

  let [counter , rahulcounter]=useState(15);

  let addValue=()=>{
    counter=counter+1;
    rahulcounter(counter);
  //  console.log(counter);
  }
  let removevalue=()=>{
    counter=counter-1;
    rahulcounter(counter);
  }

 
 let value=()=>{
  if(counter<20){
    counter=counter+1;
    rahulcounter(counter)
  }
 }

 let decreasevalue=()=>{
 if(counter>5){
  counter=counter-1;
  rahulcounter(counter);
 }
 

 }


return(
  <>
  <h2 className='text-center'>
    practice hooks 
  </h2>
 <button onClick={value}> it will only increase after the value is less than twenty {counter}</button>
 <p>"add value"={counter}</p>
 <button onClick={addValue}> this is value is increasing after click {counter}</button>
 <button onClick={decreasevalue}>this value is decrease if the value is greaterthan 5  =" {counter}"</button>
 <h3 onClick={removevalue}>this value is decreasing after clicking {counter}</h3>
  </>
)
  
}

export default App
