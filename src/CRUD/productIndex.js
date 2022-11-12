import axios from "axios";
import {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


export function ProductIndex(){
    const[products,setProducts]=useState([]);
    const navigate=useNavigate()
    function GetProduct(){
        axios({
            method:"GET",
            url:"http://localhost:4000/products"
        })
        .then(response=>{
            setProducts(response.data)
        })
    
    }


      useEffect(()=>{
         GetProduct();
      },[])    
      
      function handleDeleteClick(e){
        
            axios({
                method:"DELETE",
                url:`http://localhost:4000/delete/${e.currentTarget.value}`
            })
            navigate("/home");
            alert("Record Deleted");
         
      }
    return(
        <div className="container-fluid">
            <h2>product Data</h2>
            <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                products.map(product=>
                   <tr key={product.ProductId}>
                       <td>{product.Name}</td>
                       
                     <td>
                        <Link to={'/productdetails/'+ product.ProductId} className="btn btn-info me-2">
                            <span className="bi bi-eye-fill"></span>
                        </Link>
                        <Link to={'/editproduct/' + product.ProductId} className="btn btn-warning me-2">
                            <span className="bi bi-pen"></span>
                        </Link>
                        <button id={product.ProductId}onClick={handleDeleteClick} value={product.ProductId} className="btn btn-danger">
                            <span className="bi bi-trash"></span>
                        </button>
                     </td>
                   </tr> )
             }
                  </tbody>
            </table>
               <div>
                   <Link to="/registerproduct">Add new Product</Link>    
               </div>
        </div>
    )
}