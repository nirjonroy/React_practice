import { useLocation } from "react-router-dom"

export default function Settings(){
    const location = useLocation();
    const {username} = location.state || {};
    return (
       
        <div>Settings for {username}</div>
    )
}