import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const UsingUnstop = () => {
  const cards = [
    {
      image: img1,
      title: "Studentss and Professionals",
      description:
        "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    },
    {
      image: img2,
      title: "Companies and Recruiters",
      description:
        "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    },
    {
      image: img3,
      title: "Colleges",
      description:
        "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#rgba(255, 255, 255, 1)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "150px",
          display: "flex",

          justifyContent: "space-around",
          textAlign: "center",
          alignContent: "center",
          flexWrap: "wrap",
          background:
            "linear-gradient(180deg, #084FC7 0%, rgba(8, 79, 199, 0) 172.16%)",
          color: "white",
          py: 3,
          // borderRadius: "8px",
          mb: 5,
        }}
      >
        {[
          { number: "21M+", text: "Active Users" },
          { number: "22.3M+", text: "Assessments" },
          { number: "130K+", text: "Opportunities" },
          { number: "800+", text: "Brands Trust Us" },
          { number: "42K+", text: "Organisations" },
          { number: "78+", text: "Countries" },
        ].map((item, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "2.1rem",
            }}
          >
            {item.number}
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              {item.text}
            </Typography>
          </Typography>
        ))}
      </Box>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, color: "#333" }}
      >
        Who's using Unstop?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img
                  src={card.image}
                  alt={card.title}
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#004AAD" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          textTransform: "none",
          borderRadius: "20px",
          backgroundColor: "#004AAD",
          fontSize: "1rem",
          px: 4,
          py: 1,
        }}
      >
        View All
      </Button>
    </Box>
  );
};

export default UsingUnstop;
