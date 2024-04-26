import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { CareHospitalImg, UserThreeStarIcon } from '../../assets/Images';
import styled from 'styled-components';
import { GrLocation, SlPhone } from '../../assets/Icons';
import Colors from '../../assets/Colors';
// import { AnimationOnScroll } from 'react-animation-on-scroll';

const HospitalCard = () => {
    return (
        // <AnimationOnScroll animateIn="animate__zoomInDown">
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", height: "400px" }}>
            <Box sx={{ height: "100%", width: "40%" }}>
                <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "100%" }} // Adjust the width of the image
                    image={CareHospitalImg} // Replace with your image URL
                    alt="Hospital Image"
                />
            </Box>
            <CardContent sx={{ width: "54%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Typography variant="h6" sx={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>Care Hospital</Typography>
                        <Typography variant="body1" sx={{ fontFamily: "outfit", fontSize: "17px", fontWeight: "300" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, egestas id gravida.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontFamily: "outfit", fontSize: "16px", fontWeight: "300" }}><img src={UserThreeStarIcon} alt=''/>&nbsp;Best Heart Surgeons</Typography>
                        <Typography variant="body2" sx={{ fontFamily: "outfit", fontSize: "16px", fontWeight: "300" }}><span><GrLocation size={25} color={Colors.BACKGROUND_COLOR6} /></span>&nbsp;Chandrasekharpur, Bhubaneswar</Typography>
                        <Button variant="contained" sx={{
                            padding: "0px",
                            justifyContent: "space-around",
                            width: "100%",
                            maxWidth: "60%",
                            height: "37px",
                            backgroundColor: Colors.BACKGROUND_COLOR6, fontFamily: "outfit", fontSize: "14px", fontWeight: "300", color: Colors.BLACK, '&:hover': {
                                backgroundColor: Colors.BACKGROUND_COLOR6, // Keeps the same background color
                            },
                        }}>
                            <span><SlPhone size={20} color={Colors.BACKGROUND_COLOR1} /></span>Book Appointment
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
        // </AnimationOnScroll>
    );
};

export default HospitalCard;


export const CardMediaWrapper = styled.div`
.card-meida-img{

    width: 40%;

}
`