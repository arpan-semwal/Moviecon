import { useState , useEffect } from 'react'
import { fetchDatafromApi } from './API/api'


function App() {


  useEffect(() => {
    apiTesting();
  })
 
  const apiTesting = () => {
    fetchDatafromApi('/genre/movie/list')

    .then((res) => {
      console.log(res);
    })
  }

  return <div className='App'>App</div>
  
}

export default App
