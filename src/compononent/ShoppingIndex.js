import { BrowserRouter, Link, Routes,Route } from "react-router-dom";
import './ShoppingIndex.css'
import { HomeComponent } from "./HomeComponent";
import { CategoryComponent } from "./CategoriesComponent";
import { ProductComponent } from "./ProductComponent";
import { DetailsComponent } from "./DetailsComponent";
import { RegisterComponent } from "./RegisterComponent";
import { LoginComponent } from "./LoginComponent";
import { LoginErrorComponent } from "./LoginErrorComponent";
import { ProductIndex } from "../CRUD/productIndex";
import { ProductRegister } from "../CRUD/ProductRegister";
import { ProductDetails } from "../CRUD/ProductDetails";
import { ProductEdit } from "../CRUD/ProductEdit";


export function ShoppingIndex(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
               <header className="d-flex justify-content-between bg-dark text-white p-2">
                   <div className="brand">Shopper</div>
                   <div>
                    <span><Link to="/Home">Home</Link></span>
                    <span><Link to="/Category">Category</Link></span>
                    <span><Link to="/Register">Register</Link></span>
                    <span><Link to="/products">Products</Link></span>
                    <span><Link to="/Login">Login</Link></span>
                   </div>
                     <div className="nav-icons">
                        <span className="bi bi-search"></span>
                        <Link to="/login"><span className="bi bi-person"></span></Link>
                        <span className="bi bi-heart"></span>
                        <span className="bi bi-cart4"></span>
                        </div> 
                </header>  
                <section>
                    <Routes>
                        <Route path="/home" element={<HomeComponent/>}/>
                        <Route path="/Category" element={<CategoryComponent/>}/>
                        <Route path="/products/:category" element={<ProductComponent />} />
                        <Route path="/details/:id/" element={<DetailsComponent/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/products" element={<ProductIndex/>}/>
                        <Route path="/registerproduct" element={<ProductRegister/>}/>
                        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
                        <Route path="/editProduct/:id" element={<ProductEdit/>}/>
                        <Route path="/error"element={<LoginErrorComponent/>}/>
                        <Route path="/" element={<HomeComponent/>} />
                        <Route path="*" element={<h3><code>Page You Requested Not Found</code></h3>} />
                        
                    </Routes>
            </section> 
              <footer className="row bg-dark m-2 p-2 text-white">
                     <div className="col">
                        <h3>Support</h3>
                        <ul className="list-unstyled">
                             <li> Contact Us</li>
                              <li>FAQs</li>
                              <li>Size Guide</li>
                             <li>Shipping & Returns</li>
                   </ul>
                     </div>
                     <div className="col">
                     <h3>Support</h3>
                 <ul className="list-unstyled">
                    <li> Contact Us</li>
                    <li>FAQs</li>
                    <li>Size Guide</li>
                    <li>Shipping & Returns</li>
                </ul>
                     </div>
                     <div className="col">
                        <h3>Support</h3>
                         <ul className="list-unstyled">
                             <li> Contact Us</li>
                             <li>FAQs</li>
                             <li>Size Guide</li>
                             <li>Shipping & Returns</li>
                         </ul>
                     </div>
                     <div className="col">

                     </div>
                </footer>    
            </BrowserRouter>
        </div>
    )
}