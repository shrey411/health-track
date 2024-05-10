// ReusableAccordion.jsx
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// Define a reusable Accordion component
function ReusableAccordion({ title, content }) {
  return (
    <>
    <Wrapper>
    <Accordion className="Accodion-box" >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography 
        className="Accordion-title"
        sx={{ 
            fontSize:"25px",
            fontWeight: 500,
            fontFamily:"outfit",
        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography 
        className="Accordion-content"
        sx={{ 
            fontSize:"18px",
            fontWeight: 400,
            fontFamily:"outfit"}}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
    </Wrapper>
    </>
  );
}

export default ReusableAccordion;


export const Wrapper = styled.div`

.Accodion-box{
    margin-bottom: 20px;
    box-shadow: none;
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