import { Link, Outlet } from "react-router-dom";


export function NriHome(){
    return(
        <div>
            <h3>NRI Home</h3>
            <Link to="nrilogin">Login</Link>
            <span> | </span>
            <Link to="nriregister">Register</Link>
            <hr/>
            <Outlet/>
        </div>
    )
}