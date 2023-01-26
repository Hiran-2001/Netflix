import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
function Row() {
  const [trending,setTrending]=useState([])

  const trendingApi=async()=>{
   const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`)
   console.log(res.data.results);
   setTrending(res.data.results)
  }
  useEffect(() => {
   trendingApi()
   fetchPoster(trending.poster_path)
  }, []);

  
  const fetchPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`;
  };
  return (
    <div id="card-main" >
      {trending.map((e) => {
        return (
          <div class="card">
            {/* <img src={fetchPoster(e.poster_path)} className="card-img-top" alt="..." /> */}
          </div>
        );
      })}
    </div>
  );
}

export default Row;
