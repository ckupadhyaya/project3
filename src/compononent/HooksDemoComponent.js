import { useState } from "react";
import { useEffect } from "react"


export function SuccessComponent(){
    useEffect(()=>{
        alert("success component will mount");
        return(()=>{
            alert("success component will unmount");
        })
    },[]);
    return(
        <div>
            <h2>Login Success...</h2>
        </div>
    )
}
export function ErrorComponent(){
    useEffect(()=>{
        alert("Error component will mount");
        return(()=>{
            alert("Error component will unmount");
        })
    },[]);
    return(
        <div>
            <h2>Invalid Password...</h2>
        </div>
    )
}

export function HooksDemoComponent(){
    const[msg,setMsg]=useState('');
    const[password,setPassword]=useState('');

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleLogin(){
        if(password=="admin"){
        setMsg(<SuccessComponent/>);
    }else{
         setMsg(<ErrorComponent/>);
     }
    }
    return(
        <div className="container-fluid">
            <h2>Hooks Demo</h2>
            <input type="password" onChange={handlePassword}/>
            <button onClick={handleLogin}>Login</button>
            <hr/>
            <div>
                {msg}
            </div>
        </div>
    )
}