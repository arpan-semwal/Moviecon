import React , {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const TopRated = () => {
  const [endpoint , setEndpoint] = useState("movie");
  const {data , loading} = useFetch(`/${endpoint}/top_rated`);

  const onTapChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  }


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">TopRated</span>
            <SwitchTabs data = {["Movies" , "tv"]} onTapChange={onTapChange}/>
        </ContentWrapper>
        {/* passing data and loading */}
      <Carousel data={data?.results} loading={loading} />

    </div>
  )
}

export default TopRated
