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

const MedicalStaffCard = ({imgSrc}) => {
  return (
    <>
      <Card sx={{ margin: "3rem auto", maxWidth: "95%" }}>
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
            <FavoriteIcon color="secondary" />
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
              sx={{
                fontSize: "24px",
                fontFamily:"outfit",
                fontWeight: 500,
              }}
            >
              Dr. Frances Sutton
            </Typography>
            <Typography variant="body2" color="text.secondary"
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
              MBBS, DM, DNB (Cardiology)
            </Typography>
            <Typography variant="body2" sx={{
                fontSize: "18px",
                fontFamily:"outfit",
                fontWeight: 400,
              }}>
               <strong>₹ 800</strong> at clinic
            </Typography>
            <Typography variant="body2"  sx={{
                fontSize: "18px",
                fontFamily:"outfit",
                fontWeight: 400,
              }}>
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
      </Card>
    </>
  );
};

export default MedicalStaffCard;
