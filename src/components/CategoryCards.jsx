import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PersonIcon from '../assets/icons/person.svg';
import Competitions from '../assets/icons/competitions.svg';
import Intern from '../assets/icons/intern.svg';
import Jobs from '../assets/icons/jobs.svg';
import Practise from '../assets/icons/practise.svg';
import { scaleWidth, scaleHeight, scaleFont, scaleBottom, scaleLeft, scaleRight, scaleTop } from "../helpers/Scalefactor.js";

const MentorshipCard = () => {
  const categories = [
    { title: "Internships", description: "Gain Practical Experience", icon: Intern },
    { title: "Mentorship", description: "Guidance from Top Mentors", icon: PersonIcon },
    { title: "Jobs", description: "Explore Diverse Careers", icon: Jobs },
    { title: "Competitions", description: "Battle for Excellence", icon: Competitions },
    { title: "Practice", description: "Refine Skill Daily", icon: Practise },
  ];

  const cardStyles = {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: scaleWidth(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: scaleWidth(20),
    width: `calc(33.33% - ${scaleWidth(100)}px)`,
    minWidth: scaleWidth(250),
    flexGrow: 1,
    "@media (max-width: 900px)": { width: `calc(50% - ${scaleWidth(20)}px)` },
    "@media (max-width: 600px)": { width: "100%" },
  };

  const iconStyles = {
    width: scaleWidth(64),
    height: scaleHeight(64),
    marginBottom: scaleHeight(12)
  };

  const titleStyles = {
    fontSize: scaleFont(20),
    fontWeight: 600,
    color: '#333333',
    textAlign: 'center',
    marginBottom: scaleHeight(12)
  };

  const subtitleStyles = {
    fontSize: scaleFont(14),
    fontWeight: 400,
    color: '#666666',
    textAlign: 'center'
  };

  const decorativeCircle = (width, height, left, top, color) => ({
    position: 'absolute',
    width: scaleWidth(width),
    height: scaleHeight(height),
    left: scaleLeft(left),
    top: scaleTop(top),
    borderRadius: '50%',
    backgroundColor: color,
    opacity: 0.5,
    filter: 'blur(8px)',
    zIndex: 0
  });

  const decorativeCircle1 = (width, height, left, bottom, color) => ({
    position: 'absolute',
    width: scaleWidth(width),
    height: scaleHeight(height),
    right: scaleLeft(left),
    bottom: scaleTop(bottom),
    borderRadius: '50%',
    backgroundColor: color,
    opacity: 0.5,
    filter: 'blur(8px)',
    zIndex: 0
  });

  const categoriesContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: scaleWidth(20),
    backgroundColor: "#FFFFFF",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: scaleWidth(200),
    marginRight: scaleWidth(200),
    marginTop: scaleWidth(40),
    borderRadius: scaleWidth(20),
    padding: '2%'
  };

  return (
    <div style={categoriesContainer}>
      {categories.map((category, index) => (
        <Card key={index} elevation={0} style={cardStyles}>
          <div style={decorativeCircle(100, 100, -41, -41, '#EEEAFE')}></div>
          <div style={decorativeCircle(100, 100, -30, 67, '#EEEAFE')}></div>
          <div style={decorativeCircle1(100, 100, -0, 0, '#D8F7EE')}></div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={category.icon} alt={category.title} style={iconStyles} />
            <Typography variant="h6" style={titleStyles}>{category.title}</Typography>
            <Typography variant="body2" style={subtitleStyles}>{category.description}</Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MentorshipCard;
