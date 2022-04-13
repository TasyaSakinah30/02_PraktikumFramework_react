import React from "react";
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';


const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then((response) => response.json())
            .then((result) => setProducts(result))
            .catch((err) => console.log(err))
    },[]);

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDeatil = products.filter(x=>x.id == proid.id)
    const product = proDeatil[0];
    console.log(product);

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            setCartBtn("Remove from Cart")
        }
        else {
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
          <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={product.img} alt={product.title} height="400px"/>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <h1>{product.title}</h1>
                    <hr/>
                    <h2>{product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
          </div>  
        </>
    )
}
export default ProductDetail;