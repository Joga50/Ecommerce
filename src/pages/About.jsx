import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundImage:
      "url(https://4kwallpapers.com/images/wallpapers/dslr-camera-zoom-lens-fog-5k-3840x2160-411.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",

    zIndex: "-15",
  },
  aboutTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  aboutText: {
    fontSize: "20px",
    lineHeight: "1.5",
  },
});

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <div>
        <h1 className={classes.aboutTitle}>About Us</h1>
        <p className={classes.aboutText}>
          We are a premium ecommerce store offering a wide variety of
          high-quality products to our customers at an affordable price. Our
          goal is to provide the best possible shopping experience to our
          customers, with a focus on excellent customer service and fast,
          reliable shipping.
        </p>
      </div>
    </div>
  );
}

export default About;
