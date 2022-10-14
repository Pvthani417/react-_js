import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export function Menu(){
    const [count,setCount]=useState([]);
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response)=>response.json())
        .then((data)=>{
            setCount(data)
        })
    },[])
    return (
        <div>
            {count.map((value,index) => (

                <div className='card col-lg-3 text-center ml-5 m-5 p-5 bg-warning text-dark'>
                    <div className='card-header '>
                        {value.id}
                        <div className='card-body'>
                                    {value.title}
                        </div>
                    </div>
                    
                </div>
                

            ))}
        </div>
    );
    }