import React, { useState } from 'react'
import { Wrapper } from './Styled'



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQsectionImg } from '../../assets/Images';




const FAQSection = () => {

    const [expanded, setExpanded] = useState("panel1");

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        // If the same accordion is clicked, close it, otherwise set it to the clicked accordion
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <>
            <Wrapper>
                <section className="Faq-section">
                    <main className="main-Faq">
                        <div className="Faq-box">
                            <div className="Faq-container pt-5 pb-5">
                                <div className="Faq-left-part">
                                    <div className="header-box">
                                        <h5>FREQUENTLY ASKED QUESTION</h5>
                                    </div>
                                    <div className="question-header">
                                        <h3>What Can We Help With Today?</h3>
                                    </div>
                                    <div className="question-container">
                                        <Accordion defaultExpanded expanded={expanded === 'panel1'}
                                            onChange={handleAccordionChange('panel1')}
                                        >
                                            <AccordionSummary 
                                                expandIcon={<ExpandMoreIcon style={{ fontSize: "2.5rem" }} />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <span >How do you ensure the quality of your equipment?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel2'}
                                            onChange={handleAccordionChange('panel2')}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ fontSize: "2.5rem" }} />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                            >
                                                <span >I am not sure which program fits my needs. What should I do?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel3'}
                                            onChange={handleAccordionChange('panel3')}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ fontSize: "2.5rem" }} />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                            >
                                                <span >How can I book an appointment?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel4'}
                                            onChange={handleAccordionChange('panel4')}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ fontSize: "2.5rem" }} />}
                                                aria-controls="panel4-content"
                                                id="panel4-header"
                                            >
                                                <span >Are all your professionals medically trained?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="Faq-right-part">
                                    <div className='faq-img-box'>
                                        <img src={FAQsectionImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </Wrapper>
        </>
    )
}

export default FAQSection