import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import LogoImage from "../components/LogoImage";

// const Header = () => {
//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, textAlign: "left" }}
//         >
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//             PseudoLab
//           </Link>
//         </Typography>
//         <Button color="inherit">
//           <Link to="/test" style={{ textDecoration: "none", color: "inherit" }}>
//             Posts
//           </Link>
//         </Button>
//         <Button color="inherit">
//           <Link to="/game" style={{ textDecoration: "none", color: "inherit" }}>
//             About
//           </Link>
//         </Button>
//         {/* Add more navigation links as needed */}
//       </Toolbar>
//     </AppBar>
//   );
// };

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  color: "#000",
  justifyContent: "space-between",
});

const Logo = styled(Typography)({
  textDecoration: "none",
  fontWeight: "bold",
});

const NavLinkContainer = styled(Box)({
  display: "flex",
  gap: (theme) => theme.spacing(3),
});

const LoginButton = styled(Button)({
  marginLeft: "auto",
});

const Header = () => {
  return (
    <StyledAppBar position="fixed">
      <Container>
        <StyledToolbar>
          <LogoImage
            maxWidth="100px"
            height="auto"
            marginRight="50px" // 이미지와 텍스트 사이에 간격을 조절
          />
          <NavLinkContainer>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/Test">
              Features
            </Button>
            <Button color="inherit" href="/About">
              Contact
            </Button>
          </NavLinkContainer>
          <LoginButton color="inherit" href="#">
            Login
          </LoginButton>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
