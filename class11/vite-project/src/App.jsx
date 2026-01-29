import { useEffect, useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeArraySum from "./components/UseMemo";
import Memo from "./components/ReactMemo";
import ItemsList from "./components/List";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import NavBar from "./components/NavBar";
const HomePage = lazy(() => import("./components/Home"));
const AboutPage = lazy(() => import("./components/About"));
const ContactPage = lazy(() => import("./components/Contact"));
function App() {
  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);


  // useEffect(() => {
  //   import("./components/Home").then((module) =>
  //     setHomePage(() => module.default),
  //   );
  // }, []);

  // const loadHomePage = () => {
  //   import("./components/Home").then((module) =>
  //     setHomePage(() => module.default),
  //   );
  // };

  // const loadAboutPage = () => {
  //   import("./components/About").then((module) =>
  //     setAboutPage(() => module.default),
  //   );
  // };

  // const loadContactPage = () => {
  //   import("./components/Contact").then((module) =>
  //     setContactPage(() => module.default),
  //   );
  // };

  return (
    <>
      <Router>
        <div>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/" onClick={loadHomePage}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={loadAboutPage}>About</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={loadContactPage}>Contact</Link>
                </li>
              </ul>
            </nav> */}
          </div>
          {/* <Routes>
            <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
            <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
            <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
          </Routes> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/" element={<Memo />} /> */}
              {/* <Route path="/" element={<LargeArraySum />} /> */}
              <Route path="/" element={<ItemsList />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
