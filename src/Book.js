import { useState } from "react";
const Books = () => {

    const[name,setName]=useState('Gabriel');

    const handleClick =()=>{
        setName('Timi');
    }

    return ( 

        <div className='content'>
            <h1>React use state hook</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Books;