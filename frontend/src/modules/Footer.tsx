import { Link } from "react-router-dom";
import { Grid, Container, Typography, Link as MuiLink } from "@mui/material";

// import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <div className="logo">
              <Typography variant="h5" component="h1">
                <b>PseudoLab</b>
              </Typography>
              <div>
                <MuiLink
                  href="mailto:info@pellerex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <EmailIcon /> */}
                </MuiLink>
                <MuiLink
                  href="https://twitter.com/pellerex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <TwitterIcon /> */}
                </MuiLink>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="link">
              <div className="title">LINKS</div>
              <div className="policies">
                Use of our platform is subject to
                <br />
                our{" "}
                <MuiLink component={Link} to="/terms">
                  terms
                </MuiLink>{" "}
                and{" "}
                <MuiLink component={Link} to="/policies">
                  policies.
                </MuiLink>
              </div>
              <MuiLink component={Link} to="/contact-us">
                Contact Us
              </MuiLink>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="notices">
              <Typography variant="h6" className="title">
                NOTICES
              </Typography>
              <div className="copyRight">
                Copyright ©{" "}
                <MuiLink
                  href="https://technologyleads.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technology Leads
                </MuiLink>{" "}
                {/* {moment().format("YYYY")}.<br /> */}
                All rights reserved.
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
