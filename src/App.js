import classes from "./App.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className={classes.app}>
        <Header />
        <Banner />
      </div>
    </Fragment>
  );
}

export default App;
