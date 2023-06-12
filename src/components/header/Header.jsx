import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/popcorn.png';

const Header = () => {
  const [show, setShow] = useState('top'); // top is a class
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect (() => {
        window.scrollTo(0 , 0); //the scroll will start from the top
  } , [location])

  const controlNavbar = () => {   //to control the transition of the navbar after 200 it will hide
    
    if(window.scrollY > 200){
        if(window.scrollY > lastScrollY && !mobileMenu){
            setShow("hide");
        
        }else{
            setShow("show");
        }
        }
    else{
        setShow("top");
    }
        setLastScrollY(window.scrollY);
    
  };

  useEffect(() => {
    window.addEventListener('scroll' , controlNavbar) //best practice is to return the event 
    return  () => {
        window.removeEventListener('scroll' , controlNavbar) 
    }
  } , [lastScrollY])


  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  }

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  }
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const searchQueryHandler = (event) => {
    if(event.key === 'Enter' && query.length > 0){ 
        navigate(`/search/${query}`) ;// whenver we hit enter the page will navigate to search page  and query is the input we haive taken
        setTimeout(() => {
            setShowSearch(false);
        }, 1000);
    }
}

const navigationHandler = (type) => { // fucntion to define path , when we will click movie or tv show from menu
    if(type === "movie"){
        navigate("/explore/movie")
    }
    else{
        navigate("/explore/tv")  
    }

    setMobileMenu(false);
}



  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="Popcorn" />
        </div>

        {/* menu */}
        <ul className="menuItems">
            <li className="menuItem" onClick={() => {navigationHandler("movies")}}>Movies</li>
            <li className="menuItem" onClick={() => {navigationHandler("Tv shows")}}>Tv shows</li>
            <li className="menuItem">
                <HiOutlineSearch onClick={openSearch}/>
            </li>
        </ul>

        <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch}/>

            {mobileMenu ? (
                <VscChromeClose onClick={closeMobileMenu} />
            ):  <SlMenu onClick={openMobileMenu}/>}
           
        </div>
      </ContentWrapper>

      {showSearch && <div className="searchBar">
        <ContentWrapper>
        <div className="searchInput">
                <input 
                type="text"
                placeholder="Search for movies pr tv shows ..." 
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                />

            <VscChromeClose onClick={() => {
                setShowSearch(false)}}
            />  
          </div>
        </ContentWrapper>
      </div>
}
    </header>
  );
};

export default Header;
