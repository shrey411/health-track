import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { BestSeller, CareHospitalImg, HospitalBed } from "../../assets/Images";
import { GrLocation,  } from "../../assets/Icons";
import Colors from "../../assets/Colors";
import styled from "styled-components";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

const HospitalCard = () => {

  const isSmallScreen = useMediaQuery("(max-width: 426px)");

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
        <HospitalInfo>
        <Box className="hospital-content" sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "baseline" }}>
          <Typography
            variant="h6"
            sx={{ color: `${Colors.FONT_COLOR1}`, fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}
          >
            Kiran Hospital Multi Super Specialist
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: `${Colors.FONT_COLOR1}`, fontFamily: "outfit", fontSize: "17px", fontWeight: "300", textAlign: "left"
            ,display: "flex",alignItems:"center",
            gap: "10px", }}
          ><img src={BestSeller} alt="" />
            SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              gap: "10px",
              fontFamily: "outfit",
              fontSize: "16px",
              fontWeight: "300",
              color: `${Colors.FONT_COLOR1}`
            }}
          >
            <img src={HospitalBed} alt="" /> 10 Bed’s
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              gap: "10px",
              fontFamily: "outfit",
              fontSize: "16px",
              fontWeight: "300",
              textAlign: { sm: "left" },
              color: `${Colors.FONT_COLOR1}`
            }}
          >
            <GrLocation size={25} />{" "}
            Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.          </Typography>
          <Button
            variant="contained"
            className="appointment-btn"
            sx={{
              padding: "0px 6px",
              justifyContent: "space-around",
              width: isSmallScreen ? "65%" : "100%",
              maxWidth: { lg: "70%", md: "100%", sm: "75%", },
              height: { lg: "40px", md: "35px", sm: "32px", xs: "35px" },
              backgroundColor: Colors.BACKGROUND_COLOR1,
              fontFamily: "outfit",
              fontSize: "14px",
              fontWeight: "300",
              color: Colors.WHITE,
              "&:hover": { backgroundColor: Colors.BACKGROUND_COLOR1 },
            }}
          > Book
            Appointment
          </Button>
        </Box>
        </HospitalInfo>
      </CardContent>
    </Card>
    // </AnimationOnScroll>
  );
};

export default HospitalCard;

export const HospitalInfo = styled.div`

.hospital-content h6{
  font-size: 30px;
}

@media (max-width: 1220px){
  .hospital-content h6{
    font-size: 24px;
  }
  .hospital-content p{
    font-size: 14px;
  }
}


@media (max-width: 900px){
  .hospital-content h6{
    font-size: 30px;
    text-align: left
  }
  .hospital-content p{
    font-size: 17px;
  }
}

@media (max-width: 680px){
  .hospital-content h6{
    font-size: 25px;
  }
  .hospital-content p{
    font-size: 15px;
    text-align: left;
  }
}
`
