import React , {useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss";

import useFetch from '../../../hooks/useFetch';

import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background , setBackground] = useState("");
    const [query , setQuery] = useState("");
    const  navigate = useNavigate();
    const {url} = useSelector((state) => state.home)

    const {data , loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop+
                   data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg); // to pick from random results and math.floor to change float to decimal
    } , [data])


    const searchQueryHandler = (event) => {
        if(event.key === 'Enter' && query.length > 0){ 
            navigate(`/search/${query}`) // whenver we hit enter the page will navigate to search page  and query is the input we haive taken
        }
    }

    const handleSearchButtonClick = () => {
      if (query.length > 0) {
        navigate(`/search/${query}`);
      }
    };



  return (
    <div className='heroBanner'>

        {!loading && <div className="backdrop-img">
            <Img src={background}/>
        </div>}

        <div className="opacity-layer">

        </div>

        <ContentWrapper>
        <div className="heroBannerContent">
            <span className="title">Welcome .</span>
            <span className="subTitle">Millins of movies , Tv shows and people to discover. 
                Explore Now 
            </span>
            <div className="searchInput">
                <input 
                type="text"
                placeholder="Search for movies pr tv shows ..." 
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                />
                 <button onClick={handleSearchButtonClick}>Search</button>
           
          </div>
        </div>
      </ContentWrapper>

    </div>
    
  );
}

export default HeroBanner
