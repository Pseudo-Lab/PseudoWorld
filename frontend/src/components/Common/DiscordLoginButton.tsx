import { Typography, Button } from "@mui/material";
import DiscordIcon from "../../components/common/DiscordIcon";

const DiscordLoginButton = () => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        bg: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "8px 16px",
        marginLeft: "auto",
      }}
    >
      <DiscordIcon className="h-6 w-6 mr-3" />
      <Typography marginLeft={1} textTransform={"none"}>
        Login with Discord
      </Typography>
    </Button>
  );
};

export default DiscordLoginButton;
