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
import TeacherUp from "./components/includes/signup/Teacher-SignUp/SignUp";
import StudentUp from "./components/includes/signup/Student-SignUp/SignUp";
import TeacherIn from "./components/includes/signin/Teacher-SignIn/SignIn"
import StudentIn from "./components/includes/signin/Student-SignIn/SignIn"

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
            <Route path="teacher-signup" element={<TeacherUp />} />
            <Route path="student-signup" element={<StudentUp />} />
            <Route path="teacher-signin" element={<TeacherIn />} />
            <Route path="student-signin" element={<StudentIn />} />
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
