import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import axios from "axios";
import { Button } from "@mui/material";
import { GrPlayFill, GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
function HomePage() {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    const randomNumber = randomIntFromInterval(0, 20);
    fetchApi(randomNumber);
    // fetchPoster(trending.poster_path)
    trendingApi();
  }, []);
  const [homeBanner, setHomeBanner] = useState([]);
  const [trending, setTrending] = useState([]);

  const trendingApi = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`
    );
    console.log(res.data.results);
    setTrending(res.data.results);
  };

  const apiUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa";
  const fetchApi = async (e) => {
    const res = await axios.get(apiUrl);
    // console.log(res.data.results[e]);
    // console.log(res.data.results[e].title);
    setHomeBanner(res.data.results[e]);
  };
  const fetchPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`;
  };

  return (
    <div id="homePage-main">
      <NavBar />
      <div
        className="home-page-main"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${homeBanner.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <img className="home-page-main-image" src={fetchBanner(homeBanner.backdrop_path)} alt="NO Image" /> */}
        <div className="movie-details">
          <h1>{homeBanner.title || homeBanner.name}</h1>
          <h4>{homeBanner.overview}</h4>
          <Button id="play-btn">
            {" "}
            <GrPlayFill /> &nbsp; Play
          </Button>
          <Button id="list-btn">
            {" "}
            <GrAdd /> &nbsp; List
          </Button>
        </div>
      </div>
      <div className="popular">
        <h1>Popular on netflix</h1>
        <div className="popular-div">
          {trending.map((e) => {
            return (
              <div className="popular-card">
                <Link to={`/details/${e.id}`}>
                  <img
                    src={fetchPoster(e.backdrop_path)}
                    className="card-img"
                    alt="..."
                  />
                  <h1>{e.original_title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
