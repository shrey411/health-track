import { Grid } from '@mui/material';
import React from 'react'
import HomeAttendantCard from '../Common/HomeAttendantCard';
import { Wrapper } from './Styled';
import ServiceCard from '../Common/ServiceCard';

const AttendServices = ({ header, question, showBenefits, benefits, homeServices, showService }) => {

    const onlineFeatures = [
        "Initial assessment of current condition.",
        "Demonstration of exercises.",
        "Planning and scheduling next sessions."
    ];

    const atHomeFeatures = [
        "Initial assessment of current condition.",
        "Demonstration of exercises.",
        "Planning and scheduling next sessions.",
        "Hands-on assessment and treatment.",
        "Availability of specialized equipment."
    ];



    return (

        <>
            <Wrapper>
                <div className="HomeAttend-service">
                    <div className="main-attend-Box pt-4 pb-5">
                        <div className="HomeAttend-header">
                            <h3>{header}</h3>
                        </div>
                        <div className="sub-attend-box">
                            {(showService || showBenefits) ?
                                <div className="home-services">
                                    <div className="services-details">
                                        <Grid
                                            container
                                            rowSpacing={4}
                                            columnSpacing={{ xs: 0, sm: 3, md: 3 }}
                                            sx={{ margin: "0 0" }}
                                        >
                                            {homeServices.map((service, index) => (
                                                <Grid item xs={12} sm={4} md={4} key={index}>
                                                    <HomeAttendantCard
                                                        imgSrc={service.imgSrc}
                                                        description={service.description}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </div>
                                    <div className="services-info">
                                        <div className="info-question">
                                            <h2>{question.header}</h2>
                                            <p>{question.description}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='PhysiotherapyMode'>
                                    <div className='PhysiotherapyMode-header'>
                                        <div className='PhysiotherapyMode-title'>
                                            <h3>Choose your mode of physiotherapy</h3>
                                        </div>
                                    </div>
                                    <div className='PhysiotherapyMode-Details'>
                                        
                                                <ServiceCard
                                                    title="Online"
                                                    price="249"
                                                    features={onlineFeatures}
                                                    buttonLabel="Book Now"
                                                />
                                                <ServiceCard
                                                    title="At home"
                                                    price="799"
                                                    features={atHomeFeatures}
                                                    buttonLabel="Book Now"
                                                />
                                    </div>
                                </div>

                            }
                            <div className="home-Appointment-box">
                                <div className="HomeAttendent-form p-4">
                                    <div className="form-header">
                                        <h3>Book Attendant Services at Home With TTHC</h3>
                                    </div>
                                    <form className="form-section">
                                        <div className="form-box">
                                            <label>Name</label>
                                            <input type="text" placeholder="Patient Number*" />
                                        </div>
                                        <div className="form-box">
                                            <label>Mobile No</label>
                                            <input type="text" placeholder="Mobile Number*" />
                                        </div>
                                        <div className="form-box">
                                            <label>Email Id</label>
                                            <input type="text" placeholder="Email Id" />
                                        </div>
                                        <div className="form-box">
                                            <label>Address</label>
                                            <input type="text" placeholder="Address" />
                                        </div>
                                        <div className="form-box">
                                            <label>Service Required</label>
                                            <input type="text" placeholder="Service" />
                                        </div>
                                        <div className="form-btn mt-4">
                                            <button type="button">Book an Appointment</button>
                                        </div>
                                    </form>
                                    <div className="form-footer">
                                        <p>By Submitting the form, you Agree to TTHC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showBenefits && (
                            <div className='benefits-section'>
                                <div className="medical-attend-benefits">
                                    <div className="benefits-container">
                                        {benefits.map((benefit, index) => (
                                            <div className="benefit-item" key={index}>
                                                <div className='benefit-img'>
                                                    <img src={benefit.imgSrc} alt={benefit.text} className="benefit-image" />
                                                </div>
                                                <div className='benefit-content'>
                                                    <p>{benefit.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='BesicAttend mt-3'>
                                    <h2>Basic three steps for best medical attendant care at hospital</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default AttendServices;