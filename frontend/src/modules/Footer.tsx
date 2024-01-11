// import { Link } from "react-router-dom";
import { Box, Grid, Container, Typography } from "@mui/material";
import LogoImage from "../components/LogoImage";
import HorizonLine from "../components/HorizonLine";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
      }}
      component="footer"
    >
      <HorizonLine />
      <Container>
        <Grid container spacing={20}>
          <Grid item xs={12} sm={6} md={3}>
            <LogoImage
              maxWidth="100px"
              height="auto"
              marginRight="8px" // 이미지와 텍스트 사이에 간격을 조절
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {/* <Link href="#" color="inherit" variant="body2">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Features
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Contact
            </Link> */}
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            {/* <Link href="#" color="inherit" variant="body2">
              Documentation
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Blog
            </Link> */}
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            {/* <Link href="#" color="inherit" variant="body2">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Twitter
            </Link> */}
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="inherit" align="center">
            Copyright © {new Date().getFullYear()} 가짜연구소(Pseudo Lab)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
