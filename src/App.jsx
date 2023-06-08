import { useState , useEffect } from 'react'
import { fetchDatafromApi } from './API/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';

function App() {
  const dispatch = useDispatch()
  const url = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    apiTesting();
  },[]);
 
  const apiTesting = () => { // testing the API
    fetchDatafromApi('/movie/popular')

    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }

  return <div className='App'>App
  {/* {url?.total_pages} */}
  
   </div>
  
}

export default App
