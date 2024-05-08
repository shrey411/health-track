import React, { useState } from 'react'
import { Wrapper } from './Style'
import {  Footer_Img, TechTricksLogo,  } from '../../assets/Images'
import { Link } from 'react-router-dom'
import { BiSolidOffer, BsFillPhoneFill, FaPrescriptionBottleMedical, ImInstagram, ImLinkedin2, RiTwitterXFill, SlChart, TfiFacebook } from '../../assets/Icons/index'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Footer = () => {
    const [value, setValue] = useState()

    return (
        <>
            <Wrapper>
                <section className='container-fluid footer-section mt-5'>
                    <main className='main-footer'>
                        <div className='footer-part-1'>
                            <div className="footer-img-box ">
                                <div className='healthcare-app-detail mt-4 '>
                                    <div className='app-header'>
                                        <h4>Download the all-in-one TTHC App</h4>
                                        <span>Digital Care, Health at Home</span>
                                    </div>
                                    <div className='app-content'>
                                        <div className='phone-input'>
                                            <PhoneInput
                                                defaultCountry="IN"
                                                value={value}
                                                onChange={setValue}
                                                placeholder="Phone Number" />
                                            <div className='phone-btn'>
                                                <button className='submit-button'>TEXT ME THE APP</button>
                                            </div>
                                        </div>
                                        <div>
                                            <p>AVAILABLE IN THE APP STORE AND PLAY STORE
                                            </p>
                                        </div>
                                    </div>
                                    <div className='service-details'>
                                        <div className='left-box'>
                                            <div className='service-1'>
                                                <div className='service1-icon'>
                                                    <span><BsFillPhoneFill size={25} color='1463F3' /></span>
                                                </div>
                                                <div className='service-info'>
                                                    <p>Book Services in a
                                                        Few Clicks</p>
                                                    <span>Better recovery is just
                                                        a tap away.</span>
                                                </div>
                                            </div>
                                            <div className='service-1'>
                                                <div className='service1-icon'>
                                                    <span><SlChart/></span>
                                                </div>
                                                <div className='service-info'>
                                                    <p>Track Your Health</p>
                                                    <span>Stay updated with
                                                        your progress</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='healthcare-app-img'>
                                            <img src={Footer_Img} alt='' />
                                        </div>
                                        <div className='left-box'>
                                            <div className='service-1'>
                                                <div className='service1-icon'>
                                                    <span><BiSolidOffer /></span>
                                                </div>
                                                <div className='service-info'>
                                                    <p>Get Offers on Bookings</p>
                                                    <span>Exclusive offers on
                                                        bookings via the app</span>
                                                </div>
                                            </div>
                                            <div className='service-1'>
                                                <div className='service1-icon'>
                                                    <span><FaPrescriptionBottleMedical /></span>
                                                </div>
                                                <div className='service-info'>
                                                    <p>Order Medicines
                                                        Instantly</p>
                                                    <span>All medicines delivered at
                                                        your doorstep</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-part-2 mt-5 mb-5'>
                            <div className='main-part2'>
                                <div className='social-media-box'>
                                    <div className='health-logo'>
                                        <img src={TechTricksLogo} alt="" />
                                    </div>
                                    <div>
                                        <p>When an unknown printer took a galley of
                                            type aawer between of awtnd scrambled
                                            it to make a type specimen book.</p>
                                    </div>
                                    <div className='media-icon-box'>
                                        <span><strong>Follow Us On:</strong></span>
                                        <ul className='icon-link'>
                                            <Link to="#"><TfiFacebook /></Link>
                                            <Link to="#"><RiTwitterXFill /></Link>
                                            <Link to="#"><ImLinkedin2 /></Link>
                                            <Link to="#"><ImInstagram /></Link>
                                        </ul>
                                    </div>
                                </div>
                                <Accordion className='footer-accordion'>
                                    <AccordionSummary className="accordion-summary"
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography><span style={{ fontFamily: "outfit", fontSize: "23px", fontWeight: "500" }}>Quick Links</span></Typography> {/* Dynamic title */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <ul className='link-list'>
                                                <Link to="/">Home</Link>
                                                <Link to="#">About</Link>
                                                <Link to="#">Explore Service</Link>
                                                <Link to="#">Blog</Link>
                                                <Link to="#">Contact</Link>
                                                <Link to="#">Become a Vendor</Link>
                                            </ul>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                                <div className='quickLinks-box'>
                                    <h5>Quick Links</h5>
                                    <ul className='link-list'>
                                        <Link to="/">Home</Link>
                                        <Link to="#">About</Link>
                                        <Link to="#">Explore Service</Link>
                                        <Link to="#">Blog</Link>
                                        <Link to="#">Contact</Link>
                                        <Link to="#">Become a Vendor</Link>
                                    </ul>
                                </div>

                                <Accordion className='footer-accordion'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography><span style={{ fontFamily: "outfit", fontSize: "23px", fontWeight: "500" }}>Catagories</span></Typography> {/* Dynamic title */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <ul className='link-list'>
                                                <Link to="/Nursing Services">Nursing Services</Link>
                                                <Link to="#">Hospital Appointments</Link>
                                                <Link to="#">Medicine Delivery</Link>
                                                <Link to="#">Path lab Test</Link>
                                                <Link to="#">Medical Transportation</Link>
                                                <Link to="#">Medical Equipment</Link>
                                            </ul>
                                        </div> {/* Dynamic content */}
                                    </AccordionDetails>
                                </Accordion>
                                <div className='catagories-box'>
                                    <h5>Catagories</h5>
                                    <ul className='link-list'>
                                        <Link to="/Nursing Services">Nursing Services</Link>
                                        <Link to="#">Hospital Appointments</Link>
                                        <Link to="#">Medicine Delivery</Link>
                                        <Link to="#">Path lab Test</Link>
                                        <Link to="#">Medical Transportation</Link>
                                        <Link to="#">Medical Equipment</Link>
                                    </ul>
                                </div>


                                <Accordion className='footer-accordion'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography><span style={{ fontFamily: "outfit", fontSize: "23px", fontWeight: "500" }}>Company</span></Typography> {/* Dynamic title */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <ul className='link-list'>
                                                <Link to="#">Privacy Policy</Link>
                                                <Link to="#">Terms & Conditions</Link>
                                                <Link to="#">Refund Policy</Link>
                                                <Link to="#">Help Desk</Link>
                                                <Link to="#">Career</Link>
                                                <Link to="#">Join Us</Link>
                                            </ul>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <div className='company-box'>
                                    <h5>Company</h5>
                                    <ul className='link-list'>
                                        <Link to="#">Privacy Policy</Link>
                                        <Link to="#">Terms & Conditions</Link>
                                        <Link to="#">Refund Policy</Link>
                                        <Link to="#">Help Desk</Link>
                                        <Link to="#">Career</Link>
                                        <Link to="#">Join Us</Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='footer-part-3 pt-4 pb-3'>
                            <div className='main-copyright'>
                                <div className='copyright-container'>
                                    <div className='copyright-box'>
                                        <p>Copyright © 2024 Techtricks Healthcare</p>
                                    </div>
                                    <div className='copyright-info'>
                                        <ul className='info-list'>
                                            <Link>FAQ</Link>
                                            <Link>Sign up</Link>
                                            <Link>Login</Link>
                                        </ul>
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

export default Footer