import React from 'react';
import { Card, Avatar, Typography, Grid2, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor.js";
import Shiri from "../assets/shiri.png";
import Palak from "../assets/palak.png";
import Vedansh from "../assets/vedansh.png";
import Yash from "../assets/yash.png";
import Rutwik from "../assets/rutwik.png";
import Dhananjay from "../assets/dhananjay.png";
import Dnyaneshwar from "../assets/dnyaneshwar.png";
import Faraz from "../assets/faraz.png";
import Button from '@mui/material/Button';
import Lightarrow from "../assets/lightarrow.png"

const mentors = [
    { name: "Shiri Agarwal", role: "Product @Tesla | ARB Consultant @Amazon | MBA", rating: 4.9, reviews: 6, image: Shiri },
    { name: "Palak Gupta", role: "Management Consulting at Accenture Strategy | Gold Medalist", rating: 4.8, reviews: 8, image: Palak },
    { name: "Vedansh Dubey", role: "HRBP @World | 150+ Case Competitions", rating: 4.8, reviews: 6, image: Vedansh },
    { name: "Yash Patel", role: "Strategy GCOs Office | Monitored 500+ Students | IMD", rating: 4.8, reviews: 6, image: Yash },
    { name: "Rutwik Borkar", role: "Product Intern | Co Gold Medalist | IIM Indore & XLRI", rating: 4.8, reviews: 6, image: Rutwik },
    { name: "Dhananjay Sharma", role: "CFO's Office @SBI | LPM ICIM Ranchi | Director's List @IIM", rating: 4.8, reviews: 6, image: Dhananjay },
    { name: "Dnyaneshwar Maske", role: "AFS 18 M&A CFA 2024 CCA 2023 | 96.5 SI IMAT 2024 99.14 MAT FEB 2024 99.6", rating: 4.8, reviews: 6, image: Dnyaneshwar },
    { name: "Faraz Hussain", role: "Mentored 300+ students | Software Engineering", rating: 4.8, reviews: 6, image: Faraz },
];
const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '4px 12px',
  gap: '6px',
  borderRadius: '100px',
  border: '1px solid #EDEEF0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  minWidth: scaleWidth(90),
  minHeight: scaleHeight(26),
  marginTop: scaleHeight(30),
  
};

const textStyleColor = {
  fontFamily: 'Manrope, sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#0066FF',
  margin: 0,
  textTransform: 'none'
};
const textStyle = {
  // fontFamily: 'Manrope, sans-serif',
  fontSize: '12px',
  lineHeight: '150%',
  color: '#000000',
  margin: 0,
  textTransform: 'none'
};
const iconContainerStyle = {
  width: '40px',
  height: '40px',
  background: '#0066ff',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '4px 4px 4px 24px',
  background: '#fff',
  border: '1px solid #8ab9ff',
  borderRadius: '100px',
  width: 'fit-content',
  cursor: 'pointer',
  gap: '8px',
  justifyContent: 'space-between',
  transition: 'all 0.2s ease',
};
const handleClick = () => {
  if (onClick) onClick();
};

const handleMouseOver = (e) => {
  e.currentTarget.style.transform = 'scale(1.02)';
  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 102, 255, 0.15)';
};

const handleMouseOut = (e) => {
  e.currentTarget.style.transform = 'scale(1)';
  e.currentTarget.style.boxShadow = 'none';
};
const onClick = () => {
  console.log('Button clicked');
}
const ProfileCard = ({ name, role, rating, reviews, image }) => {
    return (
        <Card elevation={2} sx={{
            padding: scaleHeight(2),
            borderRadius: scaleWidth(8),
            textAlign: 'center',
            width: scaleWidth(230),
            height: '100%',
            transition: 'background-color 0.3s ease',
            borderColor: '#89A0CE',
            borderWidth: 1,
            '&:hover': { backgroundColor: '#E6F0FF' }
        }}>
            <Avatar src={image} sx={{ width: scaleHeight(100), height: scaleHeight(100), margin: 'auto', mb: 1 }} />
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={1}>
                <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
                <Typography fontSize={scaleFont(14)} fontWeight={600}>{rating}</Typography>
                <Typography fontSize={scaleFont(14)} color="gray">({reviews})</Typography>
                
            </Box>
            <Typography fontSize={scaleFont(18)} fontWeight={600}>{name}</Typography>
            <Typography fontSize={scaleFont(12)} marginRight={5} marginLeft={5} color="black">{role}</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={1} margin={1}>
            <Button 
              style={buttonStyle}
              onClick={onClick}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f6f7';
                e.currentTarget.style.borderColor = '#8AB9FF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={textStyle}>View Profile</span>
            </Button>
            </Box>
        </Card>
    );
};

const ProfileList = () => {
    return (
        <Box textAlign="center" mt={8} mx={4}>
            <Typography variant="h3" fontWeight={800} color="#22233F" fontSize={scaleFont(40)}>Top Mentors</Typography>
            <Typography variant="body1" color="#555" sx={{ maxWidth: '100%', marginRight: "36%", marginLeft: "36%", fontSize: scaleFont(18), mt: 1, mb: 4 }}>
                In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
            </Typography>
            <Grid2 container spacing={3} justifyContent="center" mx={4} marginRight={10} marginLeft={10}>
                {mentors.map((mentor, index) => (
                    <Grid2 item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
                        <ProfileCard {...mentor} />
                    </Grid2>
                ))}
            </Grid2>
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={4}>
              <Button 
                style={containerStyle}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <span style={textStyleColor}>View All</span>
                <div style={iconContainerStyle}>
                  <img 
                    src={Lightarrow}
                    alt="arrow-right-up" 
                    style={iconStyle}
                  />
                </div>
              </Button>
            </Box>
        </Box>
    );
};

export default ProfileList;
