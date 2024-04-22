import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { CareHospitalImg } from '../../assets/Images';

const HospitalCard = () => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center' }}>
            <CardMedia
                component="img"
                sx={{ width: "40%", }} // Adjust the width of the image
                image={CareHospitalImg} // Replace with your image URL
                alt="Hospital Image"
            />
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography variant="h6">Care Hospital</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, egestas id gravida.
                    </Typography>
                    <Typography variant="subtitle1">Best Heart Surgeons</Typography>
                    <Typography variant="body2">Chandrasekharpur, Bhubaneswar</Typography>
                    <Button variant="contained" color="primary">
                        Book Appointment
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default HospitalCard;
