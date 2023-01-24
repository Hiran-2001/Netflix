import "./App.css";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./Components/SigninPage/SigninPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import TvShows from "./Components/Shows/TV/TvShows";
import Series from "./Components/Shows/Series/Series";
import Cinema from "./Components/Shows/Cinema/Cinema";
function App() {
  return (
    <Routes>
      <Route index element={<SigninPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="tv"  element={<TvShows />} />
        <Route path="series" element={<Series />} />
        <Route path="cinema"  element={<Cinema />} />
        <Route path="login"  element={<LoginPage />} />
    </Routes>
  );
}

export default App;
