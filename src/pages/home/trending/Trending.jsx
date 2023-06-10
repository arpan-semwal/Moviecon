import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

const Trending = () => {

  const onTapChange = (tab) => {

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
