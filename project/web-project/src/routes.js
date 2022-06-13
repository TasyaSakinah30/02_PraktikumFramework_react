import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
// import Join from './Join'


const routes = [
    {name: "Home", path: "/", exact: true, main: () => <Home />},
    {name: "About", path: "/about", exact: true, main: () => <About />},
    {name: "Product", path: "/product", exact: true, main: () => <Product />}
    // {name: "Login", path: "/login", exact: true, main: () => <Login />},
]

export default routes;