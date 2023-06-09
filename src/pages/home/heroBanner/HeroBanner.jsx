import React , {useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss";

import useFetch from '../../../hooks/useFetch';

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



  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
            <span className="title">Welcome .</span>
            <span className="subtitle">Millins of movies , Tv shows and people to discover. 
                Explore Now 
            </span>
            <div className="searchInput">
                <input 
                type="text"
                placeholder="Search for movies pr tv shows ..." 
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
