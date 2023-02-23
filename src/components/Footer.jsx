import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PhotoAlbum } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#8e44ad",
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
    margin: "10px",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
      style={{ backgroundColor: "#9370DB" }}
    >
      <div className={classes.slogan}>
        My Photopedia, Save your favorite pictures!
      </div>
      <div>
        <BottomNavigationAction
          component={Link}
          to="/"
          icon={<HomeIcon />}
          label="Home"
          showLabel={true}
          className={classes.action}
          sx={{ m: "10px", p: "10px" }}
        />

        <BottomNavigationAction
          component={Link}
          to="/cart"
          icon={<PhotoAlbum />}
          label="My Albúm"
          showLabel={true}
          className={classes.action}
          sx={{ m: "10px", p: "10px" }}
        />
      </div>
    </BottomNavigation>
  );
}

export default Footer;
