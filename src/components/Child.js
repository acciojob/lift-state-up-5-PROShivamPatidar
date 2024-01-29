import React,{ useState } from "react";
const Child=({isLoggedIn,setisLoggedIn})=>{
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

function handleLogin(e){
    e.preventDefault();
    if(username && password){
        setisLoggedIn(true);
    }
}

    return(
        <div>
             {isLoggedIn?<p>You are logged in!</p>:
            <form onSubmit={handleLogin}>
               Username: <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/><br/>
               Password: <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
               <br/>
               <button type="submit">Login</button>
            </form>
           }
        </div>
    )
}
export default Child;