import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 150,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#3f51b5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  action: {
    color: "white",
    fontSize: 18,
    margin: "0 15px",
  },
  slogan: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
      style={{ backgroundColor: "#3f51b5" }}
    >
      <div className={classes.slogan}>Your Ecommerce Slogan Here</div>
      <div>
        <BottomNavigationAction
          component={Link}
          to="/"
          icon={<HomeIcon />}
          label="Home"
          showLabel={true}
          className={classes.action}
        />

        <BottomNavigationAction
          component={Link}
          to="/cart"
          icon={<ShoppingCartIcon />}
          label="My Cart"
          showLabel={true}
          className={classes.action}
        />
      </div>
    </BottomNavigation>
  );
}

export default Footer;
