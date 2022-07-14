import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Noscreen from "./components/pages/404/404screen";
import "./theme/GlobalStyles";
import GlobalStyles from "./theme/GlobalStyles";
import HomePage from "./components/screens/StuScreens/HomePage";
import EnrollPage from "./components/screens/StuScreens/EnrollPage";
import CoursePage from "./components/screens/StuScreens/CoursePage";
import VedioPlayPage from "./components/pages/Students/VedioPlay/VedioPlayPage";
import PopUp from "./components/includes/signup/popup/PopUp";
import Teacher from './components/includes/signup/Teacher-SignUp/SignUp'
import Student from './components/includes/signup/Student-SignUp/SignUp'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="Enroll" element={<EnrollPage />} />
            {/* <Route path="coursenamehome"> */}
              <Route path="coursenamehome" element={<PopUp />} />
              <Route path="teacher-sign" element={<Teacher />} />
              <Route path="student-sign" element={<Student />} />
              <Route path="courcepage" element={<CoursePage />} />
              <Route path="vedioplayname" element={<VedioPlayPage />} />
            </Route>
          {/* </Route> */}
          <Route path="*" element={<Noscreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
