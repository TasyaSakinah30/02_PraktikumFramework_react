import React from "react";
import routes from "../routes";
import { Link } from "react-router-dom";

const Navbar = () => (
    <ul className="nav">
        {routes.map((route, i) => (
            <div key={i}>
                <Link to={route.path}>{route.name}</Link>
            </div>
        ))}
    </ul>
);

export default Navbar;