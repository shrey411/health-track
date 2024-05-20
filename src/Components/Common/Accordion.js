// ReusableAccordion.jsx
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Define a reusable Accordion component
function ReusableAccordion({ title, content, isPhysioPage ,details,equipments , imageUrl }) {
  return (
    <>
    <Wrapper>
    <Accordion className="Accodion-box" >
      <AccordionSummary expandIcon={ isPhysioPage ? <AddIcon /> : <ExpandMoreIcon/>}>
        
        <Typography 
        className="Accordion-title"
        sx={{ 
          fontSize:"25px",
          fontWeight: 500,
          fontFamily:"outfit",
        }}>
          { isPhysioPage && <img src={imageUrl} alt=""/> }
        {title}</Typography>
      </AccordionSummary>
      <AccordionDetails className="ExpandContnent" sx={{ borderTop: isPhysioPage ? "1px solid rgba(216, 231, 255, 1)" : "none" }}>
        <Typography 
        className="Accordion-content"
        sx={{ 
            fontSize:"18px",
            fontWeight: 400,
            fontFamily:"outfit",
          }}>{content}</Typography>
          <Typography
            className="accordion-content"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "outfit",
            }}>
            {details}
          </Typography>
          {equipments && (
            <>
              <Typography
                className="equipments-header"
                sx={{
                  fontSize: "18px",
                  fontWeight: 400,
                  fontFamily: "outfit",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}>
                Equipment's used:
              </Typography>
              <List>
                {equipments.map((equipment, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={equipment} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
      </AccordionDetails>
    </Accordion>
    </Wrapper>
    </>
  );
}

export default ReusableAccordion;


export const Wrapper = styled.div`

margin-bottom: 20px;
.Accodion-box{
    margin-bottom: 20px;
    box-shadow: none;
  }
  .Accordion-title{
    display: flex;
    gap: 10px;
  }

@media (max-width: 768px) {
.Accordion-content{
  font-size: 17px;
  }
}

@media (max-width: 650px) {
  .Accordion-title{
    font-size: 23px;
  }
  .Accordion-content{
    font-size: 16px;
  }
}

@media (max-width: 426px) {
  .Accordion-title{
    font-size: 20px;
  }
  .Accordion-content{
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .Accordion-title{
    font-size: 18px;
  }
  .Accordion-content{
    font-size: 13px;
  }
}
@media (max-width: 340px) {
  .Accordion-title{
    font-size: 17px;
  }
  .Accordion-content{
    font-size: 12px;
  }
}
`