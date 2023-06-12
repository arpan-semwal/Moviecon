import React  from 'react';
import { useState } from 'react';
import './switchTabs.scss';
const SwitchTabs = ({data,onTapChange}) => {
  const [selectedTab , setSelectedTab] = useState(0);
  const [left , setleft] = useState(0);


  const activeTab = (tab , index) => {
    setleft(index * 100);
    setTimeout(() => {
        setSelectedTab(index);
    }, 300);
    onTapChange(tab , index);
  }

  return (
    <div className="switchingTabs"> 
      <div className="tabItems">
      {data.map((tab, index) => (
  <span
    key={index}
    className={`tabItem ${selectedTab === index ? 'active' : ''}`}
    onClick={() => activeTab(tab, index)}
  >
    {tab}
  </span>
))}

        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs
