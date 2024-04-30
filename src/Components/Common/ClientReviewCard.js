import React from 'react'
import { Typography, Box  } from "@mui/material";


const ClientReviewCard = ({ review, customerName, customerRole }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Outfit', fontSize: { xs: '16px', md: '20px' }, fontWeight: 400 }}>
          {review}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontSize: { xs: '18px', md: '24px' }, fontWeight: 500 }}>
          {customerName}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Outfit', fontSize: { xs: '14px', md: '18px' }, fontWeight: 300 }}>
          {customerRole}
        </Typography>
      </Box>
    </Box>
  );

export default ClientReviewCard