import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Img1 from "../assets/OpportunityImg1.png";
import Img2 from "../assets/OpportunityImg2.png";
import Img3 from "../assets/OpportunityImg3.png"
import Img4 from "../assets/OpportunityImg4.png"


const opportunities = [
  { title: 'Quizzes', color: '#D1E9F3', img: Img1 },
  { title: 'Hackthons', color: '#D4F3D1', img: Img2 },
  { title: 'Scholarship', color: '#EAD1F3', img: Img3 },
  { title: 'College Festival', color: '#F3EFD1', img: Img4 },
];

const OpportunityCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 600, fontSize: '46px' }}>
        Pick The Right Opportunity!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Explore opportunities that best suit your skills and interests!
      </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={8}>
        {opportunities.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              style={{
                backgroundColor: item.color,
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                position: 'relative', 
                height:'300px',
                width:'270px',
                marginRight:'10px'
              }}
            >
              <CardContent style={{  }}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Box
                  style={{
                    position: 'absolute',
                    bottom: '0px', 
                    right: '2px', 
                    width: '70%',
                  }}
                >
                  <img
                    src={item.img}
                    alt="Opportunity"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OpportunityCard;
