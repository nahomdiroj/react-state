import React,{useState} from "react";

export default function IncreaseDecreaseCount() {
    const [count, setCount] =useState(0);
    const Increment=()=>{setCount((count) => count + 1);};
    const Decrement=()=>{setCount((count)=>count - 1);};
    const Reset=()=>{setCount(0);}
  return (
    <div>
      <h1>Initial Value is:{count}</h1>
      <button onClick={Increment}>Increase Button</button>
      <button  onClick={Decrement}>Decrease Button</button>
      <button onClick={Reset}>Reset Button</button>
    </div>
  );
    
  
}
