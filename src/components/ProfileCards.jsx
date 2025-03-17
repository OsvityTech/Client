import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor.js";
import PersonIcon from '../assets/icons/person.svg';
import Competitions from '../assets/icons/competitions.svg';
import Intern from '../assets/icons/intern.svg';
import Jobs from '../assets/icons/jobs.svg';
import Practise from '../assets/icons/practise.svg';

const ProfileCard = ({ title, description, icon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageUrl = "https://dashboard.codeparrot.ai/api/image/Z9Roi5IdzXb5OlL3/image.png";
    const starIcon = "https://dashboard.codeparrot.ai/api/image/Z9Roi5IdzXb5OlL3/iconoir.png"
  const styles = {
    container: {
      padding: `${scaleHeight(24)}px ${scaleWidth(16)}px`,
      border: `${scaleWidth(1)}px solid #89a0ce`,
      borderRadius: `${scaleWidth(20)}px`,
      width: `${scaleWidth(293)}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: `${scaleHeight(15)}px`,
      background: isHovered ? "#e6f0ff" : "#ffffff",
      transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: `${scaleHeight(7)}px`,
      width: `${scaleWidth(185)}px`,
    },
    title: {
      fontFamily: "Manrope",
      fontSize: `${scaleFont(20)}px`,
      fontWeight: 700,
      color: "#1e242c",
      textAlign: "center",
      margin: 0,
    },
    description: {
      fontFamily: "Manrope",
      fontSize: `${scaleFont(12)}px`,
      color: "#475569",
      textAlign: "center",
      margin: "0",
    },
    button: {
      borderRadius: `${scaleWidth(100)}px`,
      marginTop: `${scaleHeight(10)}px`,
      textTransform: "none",
    },
  };

  return (
    <Card style={styles.container} elevation={0}  onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
      <div style={styles.contentWrapper}>
        <Avatar src={imageUrl} alt="Profile" sx={{ width: 64, height: 64 }} />
        <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',gap:"8px"}}>
        <img src={starIcon} alt="Star" style={{ width: '15px', height: '15px' }} />
        <Typography variant="h6" style={styles.title}>4.5</Typography>
        <Typography variant="h6" style={styles.title}>(6)</Typography>
        </div>
        <Typography variant="h6" style={styles.title}>{title}</Typography>
        <Typography variant="body2" style={styles.description}>{description}</Typography>
      </div>
      <Button variant="outlined" style={styles.button}>Learn More</Button>
    </Card>
  );
};

const ProfileList = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { title: "Internships", description: "Gain Practical Experience", icon: Intern },
    { title: "Mentorship", description: "Guidance from Top Mentors", icon: PersonIcon },
    { title: "Jobs", description: "Explore Diverse Careers", icon: Jobs },
    { title: "Competitions", description: "Battle for Excellence", icon: Competitions },
    { title: "Practice", description: "Refine Skill Daily", icon: Practise },
    { title: "Networking", description: "Connect with Professionals", icon: PersonIcon },
    { title: "Workshops", description: "Learn from Experts", icon: Intern },
    { title: "Research", description: "Contribute to Innovation", icon: Jobs },
    { title: "Bootcamps", description: "Intensive Training", icon: Competitions },
    { title: "Hackathons", description: "Solve Real-World Problems", icon: Practise },
    { title: "Certifications", description: "Boost Your Credentials", icon: PersonIcon },
    { title: "Volunteering", description: "Give Back to Community", icon: Intern },
    { title: "Freelancing", description: "Work Independently", icon: Jobs }
  ];

  const displayedCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div style={{marginTop: `${scaleHeight(50)}px`,
    marginRight: `6%`,
    marginLeft: `6%`}}>
        {/* Heading */}
      <Typography variant="h3" fontWeight={700} color="#272F3A" textAlign="center" fontSize={scaleFont(32)}>
        Unlock Your Career
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="#555"
        textAlign="center"
        sx={{ maxWidth: '100%', fontSize: scaleFont(16) ,marginBottom: `${scaleHeight(50)}px`, marginRight: `25%`,marginLeft: `25%`}}
      >
        Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
      </Typography>
    
    <div style={{ display: "flex", flexWrap: "wrap", gap: `${scaleWidth(20)}px`, justifyContent: "center" }}>
      {displayedCategories.map((category, index) => (
        <ProfileCard key={index} {...category} />
      ))}
      {/* {!showAll && (
        <Button variant="contained" onClick={() => setShowAll(true)} style={{ marginTop: scaleHeight(20) }}>
          See More
        </Button>
      )}
      {showAll && (
        <Button variant="text" onClick={() => setShowAll(false)} style={{ marginTop: scaleHeight(10) }}>
          See Less
        </Button>
      )} */}
    </div>
    </div>
  );
};

export default ProfileList;
