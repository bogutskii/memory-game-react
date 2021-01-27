import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar(props) {
    return (
        <>
            <NavLink to='/Card'>Card</NavLink>

            <br/>
            <NavLink to='/Field'>Field</NavLink>
            <br/>

        </>
    );
}