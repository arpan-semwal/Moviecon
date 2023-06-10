import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
// import logo from "../../assets/popcorn.png";

const Header = () => {
    const [show, setShow] = useState("top"); // creating scrolling effect of menu ,  default value is top . 
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);// menu opening in mobile devices
    const [query, setQuery] = useState(""); //text
    const [showSearch, setShowSearch] = useState(""); // to show search bar
    const navigate = useNavigate(); // navigate 
    const location = useLocation();

    return (
        <Header>
            <ContentWrapper>
                <div className="logo">
                    {/* <img src={logo} alt = ""/> */}
                </div>
            </ContentWrapper>
        </Header>
    );
};

export default Header;