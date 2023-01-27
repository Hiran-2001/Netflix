import React from 'react'
import NavBar from '../../NavBar/NavBar'
import { useState } from 'react';
import axios from 'axios';
import Row from '../../Row/Row';
import { useEffect } from 'react';
import "./TvShow.css"
function TvShows() {
  const [trending, setTrending] = useState([])
  useEffect(() => {
    tvTrendingApi()
  }, [])
  const tvTrendingApi = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`
    );
    console.log(res.data.results);
    setTrending(res.data.results);
  };
  return (
    <div id='tv-trending-main'>
      <NavBar />
      <div className="tv-trending">
        <div className="tv-trending-heading">

          <h3 style={{ marginLeft: "10px" }}>Trending TV Shows</h3>
        </div>
        <Row trending={trending} />

      </div>
    </div>
  )
}

export default TvShows