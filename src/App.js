import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import Sidebar from "./components/navbar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import SigninUp from "./components/screens/signin-up/SigninUp";



function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Sidebar />
      <SigninUp/>
    </Fragment>
  );
}

export default App;
