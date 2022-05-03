import { Fragment } from "react"
import GlobalStyles from "./theme/GlobalStyles"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
          <Navbar/>
          <h1>hi</h1>
    </Fragment>
  )
}

export default App