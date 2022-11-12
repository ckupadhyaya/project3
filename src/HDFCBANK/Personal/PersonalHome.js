import { Link, Outlet } from "react-router-dom";


export function PersonalHome(){
    return(
        <div>
            <h3>Personal Home</h3>
            <Link to="plogin">Login</Link>
            <span> | </span>
            <Link to="pregister">Register</Link>
            <hr/>
      
            <Outlet/>
        </div>
    )
}