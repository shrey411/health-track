// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const ReusableAccordion = ({ title, content }) => (
//   <Accordion> {/* Space between accordions */}
//     <AccordionSummary
//       expandIcon={<ExpandMoreIcon />}
//       aria-controls="panel1-content"
//       id="panel1-header"
//     >
//       <Typography><span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>{title}</span></Typography> {/* Dynamic title */}
//     </AccordionSummary>
//     <AccordionDetails>
//       <Typography>{content}</Typography> {/* Dynamic content */}
//     </AccordionDetails>
//   </Accordion>
// );

// export default ReusableAccordion;


import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h5>{title}</h5>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
