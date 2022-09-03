import React from "react";
import {Nav, NavBtn, NavLink, NavMenu, NavBtnLink} from "./style";

function Header() {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/'>
                        <h1>Home</h1>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={'/sing-in'}>
                        Sing In
                    </NavBtnLink>
                    <NavBtnLink to={'/sing-up'}>
                        Sing Up
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default Header;