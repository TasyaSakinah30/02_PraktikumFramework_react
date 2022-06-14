import React from 'react'
import About from './components/About';
import Home from './components/Home';
// import Logout from './components/Logout';
// import BlogPost from './container/BlogPost/BlogPost';


const routes = [
    {name: "Home", path: "/", exact: true, main: () => <Home />},
    {name: "About", path: "/about", exact: true, main: () => <About />}
    // {name: "Logout", path: "/logout", exact: true, main: () => <Logout />}
    // {name: "Product", path: "/product", exact: true, main: () => <BlogPost />}
]

export default routes;