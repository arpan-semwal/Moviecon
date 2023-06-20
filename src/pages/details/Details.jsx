import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similiar';
import Recommendation from './carousels/Recommendation';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videoData, loading: videoLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner video={videoData?.results?.[0]} crew={creditsData?.crew}/>
      <Cast data={creditsData?.cast} loading={creditsLoading}/>
      <VideosSection data={videoData} loading={videoLoading}/>

      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  );
};

export default Details;
