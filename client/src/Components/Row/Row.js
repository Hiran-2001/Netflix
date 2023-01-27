import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
function Row({trending}) {
  // const [trending,setTrending]=useState([])
  const props = trending
console.log(props);
  // const trendingApi=async()=>{
  //  const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`)
  //  console.log(res.data.results);
  //  setTrending(res.data.results)
  // }
  // useEffect(() => {
  //  trendingApi()
  //  fetchPoster(trending.poster_path)
  // }, []);

  
  const fetchPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`;
  };
  return (
    <div id="card-main" >
      {trending.map((e) => {
        return (
          <div className="card">
          {/* <h1>{e.title}</h1> */}
            <img src={fetchPoster(e.poster_path)} id="card-img" alt="..." />
          </div>
        );
      })}
    </div>
  );
}

export default Row;
