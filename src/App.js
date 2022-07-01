import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Noscreen from "./components/pages/404/404screen";
import "./theme/GlobalStyles";
import GlobalStyles from "./theme/GlobalStyles";
import Home from "./components/pages/home page"


function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        {/* <Mobile /> */}
        <Routes>
          
        <Route path="login" >
          {/* <Route index element={<Home/>}/> */}
          <Route path="Mobail">
            <Route index element={<MobHome/>} />
          </Route>
        </Route>

         {/* <Route index element={<WlcmHome/>} /> 
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="What" element={<What />} />
            <Route path="Benfit" element={<Benfit />} />
            <Route path="Use" element={<Use />} />
            <Route path="signin" element={<SigninUp />} />
            <Route path="signup" element={<Login />} /> */}
          
          <Route path="/">
            <Route index element={ <Home/>} />
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
