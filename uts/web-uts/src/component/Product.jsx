import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "./index";

const Product = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then((response) => response.json())
            .then((result) => setProducts(result))
            .catch((err) => console.log(err))
    },[]);
    
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {products && products.map(item => (
                        <div class="card mb-4" key={item.id} style={{width: "18rem"}}>
                        <img src={item.img} class="card-img-top" alt={item.title}/>
                            <div class="card-body text-center">
                                <h5 class="">{item.title}</h5>
                                <p className="lead">Rp {item.price}</p>
                                <p className="lead">stok({item.stok})</p>
                                <NavLink to={'cart/'} class="btn btn-primary ms-2" onClick={addProduct}>Beli</NavLink>
                            </div>
                    </div>
    ))}
                </div>
            </div>
        </>
    )
}

export default Product;