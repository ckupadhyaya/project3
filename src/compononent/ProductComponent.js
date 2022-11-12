import { useEffect,useState } from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {useCookies} from "react-cookie"
export function ProductComponent(){
    const[user,setUser]=useState();
    const params=useParams();
    const[categoryname,setCategoryName]=useState();
    const[products,setProduct]=useState([]);
    const[cookies]=useCookies();
    let navigate=useNavigate();
    
    useEffect(()=>{
       if(cookies["username"]==undefined){
        navigate("/login")
       }else{
        setUser(cookies["username"])
        setCategoryName(params.category);
        fetch(`http://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>response.json())
        .then(data=>{
         setProduct(data);
         
        }
         )
       }
    },[])
    return(
        <div>
            <h2>{categoryname}Products-{user}</h2>
            <div>
                {
                    products.map(product=>
                            <Link to={'/details/' + product.id}><img key={product.id} src={product.image} width="100" height="100" className="m-2 p-2" border="1" /></Link>
                        )
                }
            </div>
            <Link to="/category">Back to category</Link>
            </div>
    )
}