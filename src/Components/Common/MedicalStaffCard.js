import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Colors from "../../assets/Colors";
import styled from "styled-components";
import {GrLocation, PiMoneyFill, RiGraduationCapLine} from '../../assets/Icons/index'

const MedicalStaffCard = ({imgSrc}) => {
  return (
    <>
      <Card sx={{ margin: "auto", maxWidth: "95%" }}>
      <MediaQueries>
        <Box position="relative">
          <CardMedia
            component="img"
            // height="140"
            image={imgSrc}
            alt="Doctor Image"
          />
          <IconButton
            aria-label="add to favorites"
            style={{ position: "absolute", top: 8, right: 8 }}
          >
            <FavoriteIcon color="" />
          </IconButton>
        </Box>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: " column",
            alignTtems: "baseline",
            gap: "15px",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="Staff-DoctorName"
              sx={{
                fontSize: "24px",
                fontFamily:"outfit",
                fontWeight: 500,
              }}
            >
              Dr. Frances Sutton
            </Typography>
            <Typography variant="body2" color="text.secondary"
            className="Staff-experience"
            sx={{
                fontSize: "20px",
                fontFamily:"outfit",
                fontWeight: 500,
                color: Colors.BACKGROUND_COLOR1
              }}>
              Nursing Specialists . 12 years
            </Typography>
          </Box>
          <Box
            className="Staff-details"
          sx={{
            display: "flex",
            flexDirection: " column",
            alignTtems: "baseline",
            gap: "8px",
          }}>
            <Typography variant="body2"  sx={{
                fontSize: "18px",
                fontFamily:"outfit",
                fontWeight: 400,
              }}> 
              <span style={{ fontSize: "20px" }}><RiGraduationCapLine/></span>
              MBBS, DM, DNB (Cardiology)
            </Typography>
            <Typography variant="body2" sx={{
                fontSize: "18px",
                fontFamily:"outfit",
                fontWeight: 400,
              }}>
            <span style={{ fontSize: "20px" }}><PiMoneyFill /></span>
               ₹ 800 at clinic
            </Typography>
            <Typography variant="body2"  sx={{
                fontSize: "18px",
                fontFamily:"outfit",
                fontWeight: 400,
              }}>
                <span style={{ fontSize: "20px" }}><GrLocation /></span>
              Nidaan Hospital, Sector-1, Gurgaon
            </Typography>
          </Box>
          <Box
            sx={{
              gap: "13px",
              display: "flex",
              flexDirection: " column",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "White",
                color: "black",
                border: "1px solid rgba(54, 54, 54, 1)",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
                width: "100%",
              }}
            >
              View
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: Colors.BACKGROUND_COLOR1,
                color: Colors.WHITE,
                border: "1px solid rgba(54, 54, 54, 1)",

                width: "100%",
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </CardContent>
        </MediaQueries>
      </Card>
    </>
  );
};

export default MedicalStaffCard;


export const MediaQueries = styled.div`

.Staff-details p{
  display : flex;
  align-items: baseline;
  gap: 15px;
}

@media (max-width: 1320px){
  .Staff-experience {
    font-size: 17px;
  }
  .Staff-details p {
    font-size: 16px;
  }  
}

`
