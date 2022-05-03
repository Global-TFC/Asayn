import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import SigninUp from "./components/screens/signin-up/SigninUp";
import Wlcm from "./components/screens/welcome page/Wlcm";
import WelcomePage from "./components/pages/welcome page/WelcomePage";



function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <WelcomePage />
    </Fragment>
  );
}

export default App;
