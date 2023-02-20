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
    backgroundImage: "url(https://picsum.photos/1920/1080?grayscale)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundSize: "50%",
    padding: "50px 0",
  },
  aboutTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  aboutText: {
    fontSize: "24px",
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
