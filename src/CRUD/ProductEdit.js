import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export function ProductEdit(){
    const params=useParams();
    const[product,setProduct]=useState([{}]);

    useEffect(()=>{
        axios({
            method:'GET',
            url:`http://localhost:4000/details/${params.id}`
        })
        .then(response=>{
            setProduct(response.data);
        })
    },[]);
    return(
        <div>
            <h1>Edit product</h1>
            <form>
                <dl>
                <dt>Name</dt>
                <dd><input value={product[0].Name} type="text"/></dd>
                <dt>price</dt>
                <dd><input value={product[0].Price} type="text"/></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" checked={product[0].Stock}/>Available</dd>
                </dl>
                <button className="btn btn-info">Update</button>
            </form>
            <div>
                <Link to="/products" >Back to Product</Link>
            </div>
        </div>
    )
}