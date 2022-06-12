import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/includes/navbar/Navbar"
import Wlcm from "./components/screens/welcome/Home/Home";
import Noscreen from "./components/screens/404/404screen";
import SigninUp from "./components/screens/signin-up/SigninUp";
import Home from "./components/pages/home page/HomePage";
import "./theme/GlobalStyles";
import GlobalStyles from "./theme/GlobalStyles";
import Coswel from "./components/pages/home page/Coswel";
import Cosdata from "./components/screens/cosdata/Cosdata";
import Mobile from "./components/screens/welcome/Home/Mobile";
import About from "./components/screens/welcome/About/About";
import Contact from "./components/screens/welcome/Contact/Contact";
import What from "./components/screens/welcome/Questions/What";
import Benfit from "./components/screens/welcome/Questions/Benfit";
import Use from "./components/screens/welcome/Questions/Use";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Mobile />
        <Routes>
          
          <Route path="/" element={<Wlcm />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="What" element={<What />} />
          <Route path="Benfit" element={<Benfit />} />
          <Route path="Use" element={<Use />} />
          <Route path="signin" element={<SigninUp />} />
          <Route path="signup" element={<SigninUp />} />
          <Route path="home">
            <Route index element={<Home />} />
            <Route path="cosname">
              <Route index element={<Coswel />} />
              <Route path="class" element={<Cosdata />} />
            </Route>
          </Route>
          <Route path="*" element={<Noscreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
