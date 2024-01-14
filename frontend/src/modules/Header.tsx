import React from "react";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/system";
import LogoImage from "../components/Common/LogoImage";

const LoginButton = styled(Button)({
  marginLeft: "auto",
});

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <LogoImage
            maxWidth="100px"
            height="auto"
            marginRight="50px" // 이미지와 텍스트 사이에 간격을 조절
          />
          <Box>
            <Button color="inherit" href="/Test">
              커뮤니티
            </Button>
            <Button color="inherit" href="/Test">
              빌더
            </Button>
            <Button color="inherit" href="/About">
              러너
            </Button>
          </Box>
          <LoginButton variant="contained" color="inherit" href="#">
            로그인
          </LoginButton>
          <Button color="inherit" href="/About">
            관리자
          </Button>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default Header;
