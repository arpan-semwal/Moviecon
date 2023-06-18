import React from 'react'
import "./style.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';


const Details = () => {
  const {mediaType , id} = useParams;
  const {data , loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data: credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credit`);
  return (
    <div>
      <DetailsBanner/>

    </div>
  )
}

export default Details
