
import  React, {useEffect, useState} from "react";

function UseEffectForTitle() {
     const [count, setCount] = useState(0);
      const title = () => { setCount((count) => count + 1)};
useEffect(() => {
  document.title =` Count: ${count}`;}, [count]);

useEffect(() => {alert("component is mounted")}, []);


  return (
    <div>
       < button onClick={title}> click here</button>
       <h1>Count displayer:{count}</h1>
    
    </div>
  )
}

export default UseEffectForTitle