import { Fragment } from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <h1 className={classes.hello}>The easiest way to sell online in India</h1>
    </Fragment>
  );
}

export default Header;
