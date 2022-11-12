import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
export function CategoryComponent(){
    const [category,setCategory]=useState([]);
    const[user,setUser]=useState();
    const[cookies,setCookie,removeCookie]=useCookies();
    let navigate=useNavigate();
    useEffect(()=>{
            if(cookies["username"]==undefined){
                     navigate("/login");
            }else{
                setUser(cookies["username"]);
           fetch('http://fakestoreapi.com/products/categories')
           .then(response=>response.json())
           .then(data=>{
            setCategory(data);
           })
            }
    },[])
    function handleSignout(){
        removeCookie("username");
        navigate("/login")
    }
    return(
        <div>
            <h2>Product Categories-for {user}<button className="btn btn-link" onClick={handleSignout}>Signout</button></h2>
            <ol>
                {
                    category.map(category=>
                        <li key={category}> <Link to={'/products/' + category}>{ category.toUpperCase() }</Link> </li>
                        )
                }
           </ol>
        </div>
    )
}