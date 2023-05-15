import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
//   console.log(params.id);
  useEffect(() => {
    // const randomNumber = randomIntFromInterval(0, 20);
    // fetchApi(randomNumber);
    // fetchPoster(trending.poster_path)
    trendingApi();
  }, []);

  const [trending, setTrending] = useState([]);
 const [image,setImage] = useState()
  const trendingApi = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=bc3ab4f2543c6cf7322eda5564ceacfa`
    );
    // console.log(res.data.results);
    setTrending(res.data.results);
  };

 const comparedImage = trending.find((e)=>e.id == params.id);
 setImage(comparedImage.backdrop_path)
 console.log(image);

 const fetchPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`;
  };

  return <div>
     {/* <img src={fetchPoster(compareMovie.backdrop_path)} alt="image loading..."/> */}
  </div>;
}

export default Details;
