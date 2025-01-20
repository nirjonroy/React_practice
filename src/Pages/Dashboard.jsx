import { Link, Outlet } from "react-router-dom";

export default function Dashboard(){
    return (
        <div>Dashboard 
            <Link to="profile">profile</Link>
            <Link to="settings">settings</Link>
            <Outlet />
        </div>
    )
}