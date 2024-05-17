import { useState } from "react";

const Counter = () => {
    const [add,addOn]=useState(0);
    
    const handleClick =()=>{
        addOn(add +1);
        }
    const returnClick =()=>{
        addOn(0)
    }
    const decClick =()=>{
        addOn(add-1)
    }

    return ( 
        <div className="content">
            <br/>
            <hr/>
            <br/>
            <h2>Here is my counter using Hook</h2>
            <br/>
            <p>Count is : {add}</p>
            <br/>
            <button onClick={handleClick}>Add to counter</button>
            <button onClick={decClick}>Remove</button>
            <br/>
            <button onClick={returnClick}>Reset</button>
        </div>
     );
}
 
export default Counter;