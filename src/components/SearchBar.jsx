import React from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import BusinessCenterIcon from "../assets/business.svg";
import SearchIcon from "../assets/search.svg";
import LocationOnIcon from "../assets/location.svg";
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor";

const SearchBar = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: `${scaleHeight(20)}px ${scaleWidth(20)}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: `${scaleHeight(24)}px`,
        marginRight: scaleWidth(40),
        marginLeft:scaleWidth(40)
      }}
    >
      {/* For Business Button */}
      <Button
        variant="contained"
        startIcon={
          <img
            src={BusinessCenterIcon}
            style={{ width: `${scaleWidth(24)}px`, height: `${scaleHeight(24)}px` }}
          />
        }
        sx={{
          backgroundColor: "#E8EDFF",
          color: "#3B60E4",
          borderRadius: `${scaleWidth(24)}px`,
          textTransform: "none",
          fontWeight: "600",
          fontSize: scaleFont(14),
          padding: `${scaleHeight(8)}px ${scaleWidth(16)}px`,
          boxShadow: "none",
          height: `${scaleHeight(48)}px`,
          "&:hover": { backgroundColor: "#D0DBFF" },
        }}
      >
        For Business
      </Button>

      {/* Heading */}
      <Typography variant="h3" fontWeight={700} color="#272F3A" textAlign="center" fontSize={scaleFont(34)}>
        Unlock Your Career
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="#555"
        textAlign="center"
        sx={{ maxWidth: `${scaleWidth(460)}px`, fontSize: scaleFont(16) }}
      >
        Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
      </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: `${scaleWidth(12)}px`,
        }}>
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: `${scaleWidth(12)}px`,
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
          // maxWidth: `${scaleWidth(700)}px`,
          backgroundColor: "#FFFFFF",
          padding: `${scaleHeight(8)}px`,
          borderRadius: `${scaleWidth(50)}px`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search opportunity"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <img src={SearchIcon} alt="Search Icon" width={20} height={20} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: `50%`,
            height: `${scaleHeight(48)}px`,
            backgroundColor: "#FFFFFF",
            borderRadius: `${scaleWidth(50)}px`,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              borderRadius: `${scaleWidth(50)}px`,
              height: `${scaleHeight(48)}px`,
            },
          }}
        />
        <TextField
          placeholder="e.g. Pune, India"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={LocationOnIcon} alt="Location icon" width={20} height={20} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "50%",
            height: `${scaleHeight(48)}px`,
            borderRadius: `${scaleWidth(50)}px`,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { 
                borderLeft: "2px solid #EDEDED", // Left border only
                borderRight: "none",
                borderTop: "none",
                borderBottom: "none",
              },
              "&:hover fieldset": {
                borderLeft: "2px solid #EDEDED", // Ensures left border remains on hover
              },
              "&.Mui-focused fieldset": {
                borderLeft: "2px solid #EDEDED", // Keeps left border on focus
                borderRight: "none",
                borderTop: "none",
                borderBottom: "none",
              },
              boxShadow: "none",
              height: `${scaleHeight(48)}px`,
            },
            "& .MuiOutlinedInput-input": {
              "&:focus": { outline: "none" }, // Removes focus outline
            },
          }}
        />
      </Box>
      <Button
          variant="contained"
          sx={{
            backgroundColor: "#0066FF",
            color: "white",
            borderRadius: `${scaleWidth(50)}px`,
            fontSize: scaleFont(16),
            textTransform: "none",
            height: `${scaleHeight(48)}px`,
            padding: `0 ${scaleWidth(20)}px`,
            fontWeight: "600",
            "&:hover": { backgroundColor: "#0066FF" },
          }}
        >
          Search
        </Button>
        </Box>
    </Box>
  );
};

export default SearchBar;