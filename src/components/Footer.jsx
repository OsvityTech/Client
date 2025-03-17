

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Logo from "../assets/UnStopLogo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        // background: "linear-gradient(to bottom, #ffffff 0%, #a687e8 100%)",
        // background: "linear-gradient(to bottom, #ffffff 0%, #f2f1fd 100%)",
        background: 'linear-gradient( 90deg, #c8bff7 0%, #f4f3fd 35%, #faf9fe 50%, #f4f3fd 65%, #c8bff7 100%), linear-gradient(0deg, transparent 80%, #fefeff 100%)',
        py: 4,
        width: "1200px",
        color: "#333",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="icon"
          sx={{
            width: 153,
            height: 61,
            objectFit: "contain",
            ml: 2,
          }}
        />
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {/* Logo and Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Build with favorite in India for the world
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bolder", mb: 1 }}
            >
              Stay Connected
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              <span style={{ fontWeight: "600" }}>Phone:</span> +91-9311777388
              (Mon to Fri, 9 AM to 6 PM)
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              <span style={{ fontWeight: "600" }}>Email:</span> sales@unstop.com
            </Typography>
          </Grid>

          {/* Products Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Products
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                "Hiring",
                "Engagement",
                "Assessment",
                "Proctoring",
                "Coding Interview",
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link href="#" underline="hover" color="inherit">
                    <Typography variant="body2">{item}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* About Us Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              About us
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                "Company milestone",
                "Web mail",
                "Board of Directors",
                "Senior Management",
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link href="#" underline="hover" color="inherit">
                    <Typography variant="body2">{item}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Learn Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Learn
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Courses", "Articles", "Blog Series", "Workshops"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link href="#" underline="hover" color="inherit">
                      <Typography variant="body2">{item}</Typography>
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          {/* Apply Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Apply
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Internships", "Jobs", "Scholarships"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link href="#" underline="hover" color="inherit">
                    <Typography variant="body2">{item}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright and Social Icons */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            ©2024. All rights reserved
          </Typography>

          <Box>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Telegram">
              <TelegramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="TikTok">
              <MusicNoteIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="YouTube">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;