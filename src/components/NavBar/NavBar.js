import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar(props) {
    return (
        <div>

            <NavLink className="btn btn-light m-2" to='/Card'>Card</NavLink>

            <NavLink className="btn btn-light m-2" to='/Field'>Field</NavLink>

            <NavLink className="btn btn-light m-2" to='/Rules'>Rules</NavLink>


        </div>
    );
}