import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Noscreen from "./components/pages/404/404screen";
import "./theme/GlobalStyles";
import GlobalStyles from "./theme/GlobalStyles";
import Home from "./components/pages/Students Home/Home/Home"


function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={ <Home/>} />
          </Route>
          <Route path="*" element={<Noscreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
