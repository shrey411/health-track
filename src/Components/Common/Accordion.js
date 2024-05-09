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
        <Typography sx={{ 
            fontSize:"25px",
            fontWeight: 500,
            fontFamily:"outfit",
        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography sx={{ 
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


`