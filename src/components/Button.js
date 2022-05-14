import classes from "./Button.module.css";

//created this button component as we have to use it on multiple places
function Button() {
  return <button className={classes.button}>Try for free</button>;
}

export default Button;
