import React , {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'

const Trending = () => {
  const [endpoint , setEndpoint] = useState("day");


  const {data , loading} = useFetch(`trending/all/${endpoint}`);

  const onTapChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "Week");


  }


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data = {["Day" , "Week"]} onTapChange={onTapChange}/>
        </ContentWrapper>
    </div>
  )
}

export default Trending
