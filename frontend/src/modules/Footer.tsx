// import { Link } from "react-router-dom";
import { Box, Grid, Container, Typography } from "@mui/material";
import LogoImage from "../components/Common/LogoImage";
import HorizonLine from "../components/Common/HorizonLine";
import { LinkedIn, GitHub } from "@mui/icons-material";
import ExternalLink from "../components/Common/ExternalLink";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        right: 0,
        left: 0,
        marginTop: "10px",
        borderTop: "1px solid #e0e0e0",
        py: 2,
      }}
      bgcolor="background.paper"
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="footer"
    >
      {/* <HorizonLine /> */}
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={6}>
            <LogoImage
              maxWidth="100px"
              height="auto"
              marginRight="8px" // 이미지와 텍스트 사이에 간격을 조절
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} marginTop={4}>
            <ExternalLink href="https://www.linkedin.com/company/pseudolab">
              <LinkedIn />
            </ExternalLink>
            <ExternalLink href="https://github.com/Pseudo-Lab">
              <GitHub />
            </ExternalLink>
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
