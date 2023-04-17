import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/HomePage";
import Favorites from "./Pages/Favorites";
import Read from "./Pages/Read";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorites />}></Route>
        <Route path="/Read" element={<Read />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}
