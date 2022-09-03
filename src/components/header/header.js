import React from "react";
import {Nav, NavBtn, NavLink, NavMenu, NavBtnLink} from "./style";

function Header() {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='cursor-styled-animations/'>
                        <h1>Home</h1>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={'cursor-styled-animations/sing-in'}>
                        Sing In
                    </NavBtnLink>
                    <NavBtnLink to={'cursor-styled-animations/sing-up'}>
                        Sing Up
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default Header;