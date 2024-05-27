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


// src/AccordionItem.js
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { GrClose } from 'react-icons/gr';

import styled from 'styled-components';


const AccordionItem = ({ number, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <div className="accordion-item">
          <div className="accordion-header" onClick={toggleOpen}>
            <div className='accordion-box'>
              <div className="accordion-number">
                {number}
              </div>
              <div className="accordion-title">
                <h5>{title}</h5>
              </div>
            </div>
            <div className="accordion-icon">
              {isOpen ? (
                <GrClose />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isOpen && <div className="accordion-content"><p>{children}</p></div>}
        </div>
      </Wrapper>
    </>
  );
};

export default AccordionItem;




export const Wrapper = styled.div`
.accordion-item {
  border-bottom: 1px solid white;
  padding: 10px;
  margin: 10px 0;
}
.accordion-title h5{
  font-weight: 500;
  font-family: outfit;
}
.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion-box{
  display: flex;
  align-items: center;
  gap: 40px;
}

.accordion-number {
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  padding: 3px;
  text-align: center;
  width: 35px;
  height: 35px;
}

.accordion-icon {
  margin-left: 10px;
}

.accordion-content {
  padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

}
.accordion-content p {
  width: 78%;
}


@media (max-width: 426px){
  .accordion-title h5{
    font-size: 18px;
  }
}
`