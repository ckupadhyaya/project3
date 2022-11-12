import {useApiData} from "../hooks/useApiData"
import { useCaptcha } from "../hooks/useCaptcha";
import { useSentenceCase } from "../hooks/useSentenceCase";

export function CustomHookDemo(){
    const [categories] = useApiData("http://fakestoreapi.com/products/categories");
    const [products] = useApiData("http://fakestoreapi.com/products");
    const code=useCaptcha();
    const sentence=useSentenceCase("wElcOmE TO JaVaScript");
    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <h1>{sentence}</h1>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
                <dt>Verify Code</dt>
                <dd>{code}</dd>
            </dl>
            <button>Login</button>

            <h3>Category</h3>
            <ol>
                {
                   categories.map(category=>
                    <li key={category}>{category}</li>
                    )
                }
            </ol>
            <h2>Product</h2>
            <ol>
                {
                    products.map(product=>
                        <li key={product.id}>{product.title}</li>
                        )
                }
            </ol>

        </div>
    )
}