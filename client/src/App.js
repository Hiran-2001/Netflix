import "./App.css";
import Details from "./Components/Details/Details";
import HomePage from "./Components/HomePage/HomePage";
import Cinema from "./Components/Shows/Cinema/Cinema";
import Tv from "./Components/Shows/TV/TvShows"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/tv" element={<Tv/>} />
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
