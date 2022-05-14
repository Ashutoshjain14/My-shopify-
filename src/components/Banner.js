import { Fragment } from "react";
import classes from "./Banner.module.css";
import Button from "./Button";

//input type email gives little authentication
function Banner() {
  return (
    <Fragment>
      <section className={classes.whole_banner}>
        <div className={classes.banner}>
          <h1 className={classes.tagline}>
            The easiest way to sell <br></br> online in India
          </h1>
          <p className={classes.subheading}>
            Try one of the most powerful platforms on the market for free.
            <br></br> No technical knowledge needed.
          </p>
          <input type="email" placeholder="Enter your email address"></input>
          <Button />
        </div>
        <div className={classes.image_div}>
          <img
            className={classes.image}
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg 2x"
            alt="India product imagery with mobile view"
          ></img>
        </div>
      </section>
    </Fragment>
  );
}

export default Banner;
