import Nav from "./common/Nav";
import Home from "./pages/Home";
import "./common/Commoncss.css";
import About from "./pages/About";
//import Module from "./pages/module";
import Education from "./pages/Education";
//import Work from "./Pages/Work";
import Contact from "./pages/Contact";
//import Projects from "./Pages/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
//import PageNotFound from "./Pages/PageNotFound";
//import Jsprojects from "./Pages/Jsprojects";
import Learn from "./common/Learn";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <Learn />
      {/* <Home/>
      <About />
      <Services/>s
      <Education/>
      <Work/>
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/my-react-project" element={<Home />}></Route>
        <Route path="/my-react-project" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/module" element={<module />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
