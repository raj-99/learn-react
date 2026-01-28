import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import { Routes, Route, Link } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContext";
import User from "./components/User";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <User/> */}
      <NavBar />
      <WatchListContextWrapper>
      <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        
      </Routes>
      </WatchListContextWrapper>
    </>
  );
}

export default App;
