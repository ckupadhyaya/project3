import { Link, Outlet } from "react-router-dom";


export function HdfcHome(){
    return(
        <div>
            <h2>HDFC Home</h2>
            <Link to="/Personal">Personal</Link>
            <span> | </span>
            <Link to="/nri">NRI</Link>
            <hr/>
            <Outlet/>
        </div>
    )
}