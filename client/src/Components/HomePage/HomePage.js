import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from "axios";
function HomePage() {

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    const randomNumber = randomIntFromInterval(0, 20);
    fetchApi(randomNumber);
  }, []);
  const [homeBanner, setHomeBanner] = useState([]);

  const apiUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa";
  const fetchApi = async (e) => {
    

    const res = await axios.get(apiUrl);
    console.log(res.data.results[e]);
    setHomeBanner(res.data.results[e]);

  };
  const fetchPoster=(poster)=>{
     return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`
  }

  const fetchBanner=async()=>{
    const res = await axios.get(`https://www.themoviedb.org/discover/tv?api_key=bc3ab4f2543c6cf7322eda5564ceacfa&with_network=213`)
  }
  return (
    <div>
      <NavBar />
      <div className="home-page-main">
        <img className="home-page-main-image" src={fetchPoster(homeBanner.poster_path)} alt="NO Image" />
        {/* <h1>{homeBanner.title}</h1> */}
      </div>
    </div>
  );
}

export default HomePage;
