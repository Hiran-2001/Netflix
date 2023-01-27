import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Row from '../../Row/Row'
import { useState } from 'react';
import { useEffect } from 'react';
import axios  from 'axios';
import './Cinema.css'
function Cinema() {
  const [trending, setTrending] = useState([])
  useEffect(() => {
    cinemaTrendingApi()
  }, [])
  const cinemaTrendingApi = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`
    );
    console.log(res.data.results);
    setTrending(res.data.results);
  };
  return (
    <div id='cinema-trending-div'>
    <NavBar/>
    <div className="cinema-trending">
        <div className="cinema-trending-heading">

          <h3 style={{ marginLeft: "10px" }}>Trending Movies</h3>
        </div>
        <Row trending={trending} />

      </div>
    </div>
  )
}

export default Cinema