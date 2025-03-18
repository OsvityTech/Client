import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useMediaQuery, Box } from "@mui/material";
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor";
import Logo from "../assets/UnStopLogo.png";
import ArrowIcon from "../assets/icon_arrow.png";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMenuClick = (menu) => {
    console.log(`Clicked on ${menu}`);
    setOpenDrawer(false);
  };

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // padding: `${scaleHeight(10)}px ${scaleWidth(10)}px`,
          borderRadius: `${scaleWidth(25)}px`,
          backgroundColor: "#FFFFFF",
          margin: "2% 7% 0% 7%",
        }}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="logo"
          style={{
            width: scaleWidth(100),
            height: scaleHeight(51),
            cursor: "pointer",
          }}
        />

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon sx={{ color: "#272f3a" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <List>
                {["Internships", "Jobs", "Competition", "Mentorship", "Practice", "More"].map((item) => (
                  <ListItem
                    button
                    key={item}
                    onClick={() => handleMenuClick(item)}
                  >
                    <Typography
                      sx={{ fontSize: `${scaleFont(24)}px`, color: "#272f3a" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: `${scaleWidth(40)}px` }}>
            {["Internships", "Jobs", "Competition", "Mentorship", "Practice", "More"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: `${scaleFont(18)}px`,
                  color: "#272f3a",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}

        {/* Register Button */}
        {!isMobile && (
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: `${scaleWidth(10)}px`,
              // padding: `${scaleHeight(12)}px ${scaleWidth(24)}px`,
              border: "1px solid #fff",
              borderRadius: `${scaleWidth(100)}px`,
              textTransform: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: `${scaleFont(18)}px`,
                color: "#252641",
              }}
            >
              Register Now
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${scaleWidth(40)}px`,
                height: `${scaleWidth(40)}px`,
                background: "#252641",
                borderRadius: "100px",
                padding: `${scaleWidth(8)}px`,
              }}
            >
              <img
                src={ArrowIcon}
                alt="Arrow"
                style={{
                  width: `${scaleWidth(25)}px`,
                  height: `${scaleHeight(25)}px`,
                }}
              />
            </Box>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;