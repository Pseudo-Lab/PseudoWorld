import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            My Community
          </Link>
        </Typography>
        <Button color="inherit">
          <Link
            to="/posts"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Posts
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
        </Button>
        {/* Add more navigation links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
