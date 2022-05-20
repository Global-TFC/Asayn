import { Fragment } from "react";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

import Navbar from "./components/includes/navbar/Navbar"
import WelcomePage from "./components/pages/welcome page/WelcomePage";
import Noscreen from "./components/screens/404/404screen";
import SigninUp from "./components/screens/signin-up/SigninUp";
import Home from "./components/pages/home page/HomePage";
import "./theme/GlobalStyles"
import GlobalStyles from "./theme/GlobalStyles";



function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<WelcomePage />}/>
          <Route path="/signin" element={<SigninUp/>}/>
          <Route path="/signup" element={<SigninUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Noscreen/>}/>
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
