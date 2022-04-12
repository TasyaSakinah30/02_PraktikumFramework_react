import React from "react";
import DATA from '../Data';
import { NavLink } from 'react-router-dom';

const Product = () => {
    console.log(DATA)

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
                    {DATA.map(item => (
                        <div class="card mb-4" key={item.id} style={{width: "18rem"}}>
                        <img src={item.img} class="card-img-top" alt={item.title}/>
                            <div class="card-body text-center">
                                <h5 class="">{item.title}</h5>
                                <p className="lead">{item.price}</p>
                                <NavLink to={`/product/${item.id}`} class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                    </div>
    ))}
                </div>
            </div>
        </>
    )
}

export default Product;