import React from 'react'
import { Wrapper } from './Styled'



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQsectionImg } from '../../assets/Images';




const FAQSection = () => {
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
                                        <Accordion defaultExpanded>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ fontSize : "2.5rem" }}/>}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>How do you ensure the quality of your equipment?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p style={{ fontFamily: "outfit", fontSize: "22px", fontWeight: "400" }}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon  style={{ fontSize : "2.5rem" }}/>}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                            >
                                                <span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>I am not sure which program fits my needs. What should I do?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p style={{ fontFamily: "outfit", fontSize: "22px", fontWeight: "400" }}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion defaultExpanded>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon  style={{ fontSize : "2.5rem" }}/>}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                            >
                                                <span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>How can I book an appointment?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p style={{ fontFamily: "outfit", fontSize: "22px", fontWeight: "400" }}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ fontSize : "2.5rem" }} />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                            >
                                                <span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>Are all your professionals medically trained?</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p style={{ fontFamily: "outfit", fontSize: "22px", fontWeight: "400" }}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="Faq-right-part">
                                    <img src={FAQsectionImg} alt="" />
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