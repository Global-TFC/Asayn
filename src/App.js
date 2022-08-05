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
import RegisterTeacher from "./components/pages/Accadamy/SignUp/SignUp";
import RegisterStudent from "./components/pages/Students/SignUp/SignUp";
import LoginTeacher from "./components/pages/Accadamy/SignIn/SignIn"
import LoginStudent from "./components/pages/Students/Signin/Signin"
import Acadamy from "./components/screens/StuScreens/Acadamy";
import Mycourse from "./components/screens/StuScreens/Mycoursepage"
import Sidebar from "./components/includes/navbar/Sidebar";
import Community from "./components/firebase/Cloud Firestore/community/Chat";
import About from "./components/screens/StuScreens/About";
import Container from 'react-bootstrap/Container';
// accadamypage routs in CRF file
import CRF from "./CreaterRouts";
import Groups from "./components/firebase/Cloud Firestore/community/Groups";
import TCource from "./components/pages/Accadamy/TCource";
import Accadamypage from './components/pages/Accadamy/Accadamypage';
import Alert from "./components/includes/Alert Box/Alert";
import Userbar from "./components/includes/navbar/Userbar";
import SRF from "./components/screens/StuScreens/SRF";
import Account from "./components/screens/Account/Account"

function App() {
  return (
    <Container fluid>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Userbar />
          <Sidebar />
          <Routes>
            <Route path="account" element={<Account/>}>
              <Route path="student">
                <Route path="login"/>
                <Route path="signup"/>
              </Route>
              <Route path="acadamy">
                <Route path="alogin"/>
                <Route path="asignup"/>
              </Route>
            </Route>
            <Route path="/" element={<SRF/>}>
              <Route index element={<HomePage />} />
              <Route path="Enroll" element={<EnrollPage />} />
              <Route path="coursenamehome">
                <Route index element={<CoursePage />} />
                <Route path="courcepage" element={<CoursePage />} />
                <Route path="vedioplayname" element={<VedioPlayPage />} />
              </Route>
              <Route path="community" element={<Alert />} />
              <Route path="user" element={<PopUp />} />
              <Route path="tregister" element={<RegisterTeacher />} />
              <Route path="tlogin" element={<LoginTeacher />} />
              <Route path="register" element={<RegisterStudent />} />
              <Route path="login" element={<LoginStudent />} />
              <Route path="mycourse" element={<Mycourse />} />
              <Route path="acadamyname" element={<Acadamy />} />
              <Route path="aboutme" element={<About />} />
              <Route path="chat">
                <Route index element={<Groups />} />
                <Route path="chatername" element={<Community />} />
              </Route>
            </Route>
            <Route path="/creater" element={<CRF />} >
              <Route index element={<Accadamypage />} />
              <Route path="tcource" element={<TCource />} />
              <Route path="create" element={<TCource />} />
            </Route>
            <Route path="*" element={<Noscreen />} />
          </Routes>
        </Router>
      </Fragment>
    </Container>
  );
}

export default App;
