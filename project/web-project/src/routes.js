import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Keranjang from './components/Keranjang';
import AddBarang from './components/ProductPost';
// import Join from './Join'


const routes = [
    {name: "Home", path: "/", exact: true, main: () => <Home />},
    {name: "About", path: "/about", exact: true, main: () => <About />},
    {name: "Product", path: "/product", exact: true, main: () => <Product />},
    {name: "Keranjang", path: "/keranjang", exact: true, main: () => <Keranjang />},
    {name: "AddBarang", path: "/addBarang", exact: true, main: () => <AddBarang />},
    // {name: "Cart", path: "/cart", exact: true, main: () => <Cart />},
    // {name: "Login", path: "/login", exact: true, main: () => <Login />},
]

export default routes;