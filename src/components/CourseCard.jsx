import React from 'react';
import { Button, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CourseCard from "../assets/CourseCard.png";


const CourseInfo = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      {/* Card Container */}
      <Box display="flex" bgcolor="white" boxShadow={3} borderRadius={2} overflow="hidden" maxWidth={1200} flexDirection="row">
        {/* Left Image Section */}
        <Box width="50%">
          <img
            src={CourseCard}
            alt="Learning"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        
        <Box width="50%" p={1} bgcolor="#f3f4f6">
          <Typography variant="h5" fontWeight="bold" mb={1} ml={3}>
            Learn & Level UP Your Skill
          </Typography>
          <List>
             {['50+ Courses', 'Certificate', 'Projects & Assignments'].map((item, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon style={{ minWidth: '30px' }}>
                  <CircleIcon fontSize="small" style={{ color: '#fbbf24' }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Explore Courses Button */}
      <Button
        variant="contained"
        style={{ marginTop: '16px', padding: '16px 48px', fontSize: '16px', background:' #0066FF', border: '1px solid #3385FF',borderRadius: '30px', textTransform: 'none', }}
      >
        Explore Courses
      </Button>
    

    </Box>
  );
};

export default CourseInfo;