import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div id="herosection">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </div>
        <div id="service-section"><Services /></div>
      
      <div id="about-section">
        <About />
      </div>
      </BrowserRouter>
      <div><Footer/></div>
      
    </>
  );
}

export default App;
