import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { toggleDarkMode } from "../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const NavbarContainer = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIcon = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Input = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ThemeIcon = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  margin: "5px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#8e44ad", height: "70px" }}>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{ margin: "5px", textDecoration: "none", color: "white" }}
        >
          My Photopedia
        </Typography>
        <NavbarContainer>
          <Typography
            sx={{ margin: "5px", textDecoration: "none", color: "white" }}
            variant="h6"
            noWrap
            component={Link}
            to="/"
          >
            Home
          </Typography>
          <Typography
            sx={{ margin: "5px", textDecoration: "none", color: "white" }}
            variant="h6"
            noWrap
            component={Link}
            to="/about"
          >
            About
          </Typography>

          <Typography
            sx={{ margin: "5px", textDecoration: "none", color: "white" }}
            variant="h6"
            noWrap
            component={Link}
            to="/myalbum"
          >
            My Album
          </Typography>
          <ThemeIcon onClick={handleToggleDarkMode} isDarkMode={isDarkMode}>
            {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
          </ThemeIcon>
        </NavbarContainer>
        <Search>
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchIcon>
          <Input
            placeholder="Search…"
            inputProps={{ "aria-label": "Search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
