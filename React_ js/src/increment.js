import {React,useState} from 'react';
import './increment.css';
 export function Increment(){
    const[count,setCount]=useState(0);
    return(
        <div className='divincre'>
            <h1 className='con'>{count}</h1>
            <button  className="increment" onClick={()=>setCount(count + 1)}>Increment</button>
            <button  className="reset" onClick={()=>setCount(count * 0)}>Reset</button>
            <button  className="decrement" onClick={()=>setCount(count - 1)}>Decrement</button>
          
            
            
        </div>

    );
}