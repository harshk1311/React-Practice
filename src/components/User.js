import { useEffect, useState } from "react";

const User = (props)=>{
    const {name,location}=props;
    const [count,setCount]=useState(0);

    useEffect(()=>{
        const timer =setInterval(()=>{
            console.log("Set Interval")
        },1000)
    
        return(()=>{
            clearInterval(timer);
        });
    },[])
    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}> Increase Count </button>
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : harshkk1311</h3>
        </div>
    );
}

export default User;