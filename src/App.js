import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Noscreen from "./components/pages/404/404screen";
import "./theme/GlobalStyles";
import GlobalStyles from "./theme/GlobalStyles";
import HomePage from "./components/screens/StuScreens/HomePage";
import EnrollPage from "./components/screens/StuScreens/EnrollPage";
import CoursePage from "./components/screens/StuScreens/CoursePage";


function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={ <HomePage/>} />
            <Route path="Enroll" element={<EnrollPage/>} />
            <Route path="coursenamehome" element={<CoursePage/>}/>
          </Route>
          <Route path="*" element={<Noscreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
