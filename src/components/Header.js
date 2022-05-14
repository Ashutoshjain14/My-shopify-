import { Fragment } from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import { AiOutlineDown } from "react-icons/ai";

//used react icons library for the dropdown arrow

function Header() {
  return (
    <Fragment>
      <nav className={classes.items}>
        <div className={classes.logo}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
            alt="This is site logo"
          ></img>
          <a href="Start">
            Start <AiOutlineDown />
          </a>
          <a href="Start">
            Sell <AiOutlineDown />
          </a>
          <a href="Start">
            Market <AiOutlineDown />
          </a>
          <a href="Start">
            Manage <AiOutlineDown />
          </a>
        </div>
        <div className={classes.other_items}>
          <a href="Start">Pricing</a>
          <a href="Start">
            Learn <AiOutlineDown />
          </a>
          <a href="Start">Login</a>
          <Button />
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
