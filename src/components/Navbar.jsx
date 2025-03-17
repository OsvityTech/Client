import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { scaleWidth, scaleHeight, scaleFont } from '../helpers/Scalefactor'; // Import scale functions

const Navbar = ({ 
  logoUrl = 'https://dashboard.codeparrot.ai/api/image/Z9RmACppvFKitUH_/logo.png', 
  arrowIconUrl = 'https://dashboard.codeparrot.ai/api/image/Z9RmACppvFKitUH_/system-a.png' 
}) => {
  
  const handleMenuClick = (menu) => {
    console.log(`Clicked on ${menu}`);
    // Add navigation logic here
  };

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${scaleHeight(0)}px ${scaleWidth(10)}px`,
        borderRadius: `${scaleWidth(25)}px`,
        backgroundColor: "#FFFFFF",
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: "2%"
      }}>
        
        {/* Logo */}
        <img 
          src={logoUrl} 
          alt="Logo" 
          style={{ width: scaleWidth(142), height: scaleHeight(51.3), cursor: 'pointer' }}
        />

        {/* Menu Items */}
        <div style={{ display: 'flex', gap: `${scaleWidth(40)}px` }}>
          {['Internships', 'Jobs', 'Competition', 'Mentorship', 'Practice', 'More'].map((item) => (
            <Typography 
              key={item} 
              style={{
                fontFamily: 'Manrope',
                fontWeight: 400,
                fontSize: `${scaleFont(16)}px`,
                lineHeight: '150%',
                color: '#272f3a',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </Typography>
          ))}
        </div>

        {/* Register Button */}
        <Button style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${scaleWidth(10)}px`,
          padding: `${scaleHeight(12)}px ${scaleWidth(24)}px`,
          border: '1px solid #fff',
          borderRadius: `${scaleWidth(100)}px`,
          textTransform: 'none',
          cursor: 'pointer',
        }}>
          <span style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: `${scaleFont(16)}px`,
            lineHeight: '150%',
            color: '#252641',
          }}>
            Register Now
          </span>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${scaleWidth(40)}px`,
            height: `${scaleWidth(40)}px`,
            background: '#252641',
            borderRadius: '100px',
            padding: `${scaleWidth(8)}px`,
          }}>
            <img 
              src={arrowIconUrl} 
              alt="Arrow" 
              style={{ width: `${scaleWidth(24)}px`, height: `${scaleHeight(24)}px` }}
            />
          </div>
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
