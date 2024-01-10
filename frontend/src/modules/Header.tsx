import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            PseudoLab
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to="/test" style={{ textDecoration: "none", color: "inherit" }}>
            Posts
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/game" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
        </Button>
        {/* Add more navigation links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
