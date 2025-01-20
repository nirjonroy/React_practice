import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard/settings", {state : {username}});
    }
    return (
        <div>HomePage
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
            <button onClick={handleClick}>go to home page</button>
        </div>
    )
}