import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";

import PosterFallback from "../../../assets/poster1.jpg"
import Img from "../../../components/lazyLoadImage/img";
import {PlayIcon} from "../Playbtn"
const DetailsBanner = ({ video, crew }) => {

    const {mediaType , id} = useParams();
    const {data , loading} = useFetch(`/${mediaType}/${id}`);
    const {url} = useSelector((state) => state.home);

    // const _genres = data.genres.map((g) => g.id);


//function to see the duration of the movie
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    
    return (
        <div className="detailsBanner">
            {!loading ? (
                <> 
                  {!!data && (//!! boolean
                    <React.Fragment>
                        <div className="backdrop-img">
                            <Img src={url.backdrop + data.backdrop_path}/>
                        </div>
                        <div className="opacity-layer"></div>
                        <ContentWrapper>
                            <div className="content">
                                <div className="left">
                                    {data.poster_path? (
                                        <Img 
                                        className="posterImg"
                                        src={url.backdrop+data.poster_path}
                                        />
                                    ): (
                                        <Img
                                        className="posterImg"
                                        src={PosterFallback}/>
                                    )}
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {`${data.name || data.title} (${dayjs(
                                            data?.release_date).format("YYYY")})`}
                                    </div>
                                
                                <div className="subtitle">
                                    {data.tagline}
                                </div>
                            <div className="row">
                                <CircleRating rating={data.vote_average.toFixed(1)}/>
                                <div className="playbtn" onClick={() => {}}>
                                  
                                <PlayIcon/>
                                <span className="text">Watch Trailer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        </ContentWrapper>
                    </React.Fragment>
                  )
                    
                  }
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;