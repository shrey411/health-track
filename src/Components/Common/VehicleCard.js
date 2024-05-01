import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import Colors from "../../assets/Colors";

const VehicleCard = ({ imgSrc, title, description }) => {
  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={imgSrc}
          sx={{ background: Colors.LINEAR_GRADIENT1 }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { lg: 40, md: 27 , sm : 10},
            left: 0,
            width: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              // fontSize: "29px",
              fontSize: { lg: '29px', md: '24px' , sm: "20px" }, 
              fontFamily: "outfit",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              fontSize: { lg: '22px', md: '18px' }, 
             fontFamily: "outfit", 
             fontWeight: "400" }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default VehicleCard;
