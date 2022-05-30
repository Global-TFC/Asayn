import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import What from "./Question/What";
import Mobile from "./Home/Mobile";




function Wlcm() {
  return (
    <BrowserRouter>
    <Mobile />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="About" element={ <About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="question" element={<What />} />
    
    
    </Routes>
      </BrowserRouter>
  );
}

export default Wlcm