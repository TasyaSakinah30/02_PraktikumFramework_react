import React from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

const Navbar = () => {
    <ul className="nav">
        {routes.map((route, i) => (
            <div key={i}>
                <Link to={route.path}>{route.name}</Link>
            </div>
        ))}
    </ul>

// const Navbar = () => {
    // <ul className="nav">
    //     {routes.map((route, i) => (
    //         <li key={i}>
    //             <Link to={route.path}>{route.name}</Link>
    //         </li>
    //     ))}
    // </ul>

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">DAPURKU</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/product">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Keranjang</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <div class="d-grid gap-2 d-md-flex">
                                <button class="btn btn-warning me-md-2" type="button">LOGOUT</button>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}

export default Navbar;