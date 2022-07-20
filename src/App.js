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
import RegisterTeacher from "./components/includes/signup/Teacher-SignUp/SignUp";
import RegisterStudent from "./components/includes/signup/Student-SignUp/SignUp";
import LoginTeacher from "./components/includes/signin/Teacher-SignIn/SignIn"
import LoginStudent from "./components/includes/signin/Student-SignIn/SignIn"
import Acadamy from "./components/screens/StuScreens/Acadamy";
import Mycourse from "./components/screens/StuScreens/Mycoursepage"


function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage />} />
            <Route path="Enroll" element={<EnrollPage />} />
            <Route path="coursenamehome">
              <Route index element={<CoursePage />} />
              <Route path="courcepage" element={<CoursePage />} />
              <Route path="vedioplayname" element={<VedioPlayPage />} />
            </Route>
            <Route path="user" element={<PopUp />} />
            <Route path="tregister" element={<RegisterTeacher />} />
            <Route path="tlogin" element={<LoginTeacher />} />
            <Route path="register" element={<RegisterStudent />} />
            <Route path="login" element={<LoginStudent />} />
            <Route path="mycourse" element={<Mycourse />} />
            <Route path="acadamyname" element={<Acadamy/>}/>
          </Route>
          <Route path="*" element={<Noscreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
