import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { CareHospitalImg, UserThreeStarIcon } from "../../assets/Images";
import styled from "styled-components";
import { GrLocation, SlPhone } from "../../assets/Icons";
import Colors from "../../assets/Colors";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

const HospitalCard = () => {
  return (
    // <AnimationOnScroll animateIn="animate__zoomInDown">
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        height: { xs: "auto", md: "400px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "200px", md: "100%" },
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%" }}
          image={CareHospitalImg}
          alt="Hospital Image"
        />
      </Box>
      <CardContent
        sx={{
          width: { xs: "100%", md: "54%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "baseline" }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}
          >
            Care Hospital
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "outfit", fontSize: "17px", fontWeight: "300", textAlign: "left" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, egestas id
            gravida.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              gap: "10px",
              fontFamily: "outfit",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            <img src={UserThreeStarIcon} alt="" /> Best Heart Surgeons
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              gap: "10px",
              fontFamily: "outfit",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            <GrLocation size={25} color={Colors.BACKGROUND_COLOR6} />{" "}
            Chandrasekharpur, Bhubaneswar
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "0px 6px",
              justifyContent: "space-around",
              width: "100%",
              maxWidth: { xs: "50%", lg: "70%", md: "100%", sm: "70%"},
              height: { lg:"40px", md:"35px",sm:"32px",xs: "35px"},
              backgroundColor: Colors.BACKGROUND_COLOR6,
              fontFamily: "outfit",
              fontSize: "14px",
              fontWeight: "300",
              color: Colors.BLACK,
              "&:hover": { backgroundColor: Colors.BACKGROUND_COLOR6 },
            }}
          >
            <SlPhone size={20} color={Colors.BACKGROUND_COLOR1} /> Book
            Appointment
          </Button>
        </Box>
      </CardContent>
    </Card>
    // </AnimationOnScroll>
  );
};

export default HospitalCard;

export const CardMediaWrapper = styled.div`
  .card-meida-img {
    width: 40%;
  }
`;
