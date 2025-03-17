// import React from 'react';
// import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';

// const UpdatedCard = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         p: 4,
//         borderRadius: '16px',
//         background: 'linear-gradient(90deg, #c8bff7 0%, #f4f3fd 35%, #faf9fe 50%, #f4f3fd 65%, #c8bff7 100%)',
//         boxShadow: 3,
//       }}
//     >
//       <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//         Stay Updated
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
//         We'll send you updates on the latest opportunities to showcase your talent
//         and get hired and rewarded regularly.
//       </Typography>
//       <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//         <TextField
//           variant="outlined"
//           placeholder="Subscribe to our Newsletter"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <EmailIcon color="primary" />
//               </InputAdornment>
//             ),
//           }}
//           sx={{
//             backgroundColor: 'white',
//             borderRadius: '25px',
//             '& .MuiOutlinedInput-root': {
//               borderRadius: '25px',
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#1976D2',
//             color: 'white',
//             borderRadius: '25px',
//             px: 3,
//             '&:hover': {
//               backgroundColor: '#135BA1',
//             },
//           }}
//         >
//           Share your story Now
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default UpdatedCard;


import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const UpdatedCard = () => {
  return (
    <Box
      sx={{
        width:'1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        borderRadius: '16px',
        background: 'linear-gradient(90deg, #c8bff7 0%, #f4f3fd 35%, #faf9fe 50%, #f4f3fd 65%, #c8bff7 100%), linear-gradient(0deg, transparent 80%, #fefeff 100%)',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: '700',fontSize: '36px' }}>
        Stay Updated
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', width:'670px' }}>
        We'll send you updates on the latest opportunities to showcase your talent
        and get hired and rewarded regularly.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width:'670px', justifyContent:'center' , height:'56px' }}>
        <TextField
          variant="outlined"
          placeholder="Subscribe to our Newsletter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: 'white',
            height:'56px',
            borderRadius: '25px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0066FF',
            color: 'white',
            borderRadius: '80px',
            height:'56px',
            px: 3,
            '&:hover': {
              backgroundColor: '#135BA1',
            },
          }}
        >
          Share your story Now
        </Button>
      </Box>
    </Box>
  );
};

export default UpdatedCard;
