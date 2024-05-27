import React, { useState } from 'react'
import { Wrapper } from './Styled'
import NursingServiceSlider from '../../../Components/NursingServiceSlider'
import MedicalStaffSlider from '../../../Components/MedicalStaffSlider'
import NursingSkilledSection from '../../../Components/NursingSkilledSection'
import BasicAttendantSteps from '../../../Components/BasicAttendSteps'
import { BasicAttendImg5, EmergencyCareImage, EmergencyCareSlider1, PostSurgicalCareImage, RiceTubeCareImage, RiceTubeFeature1, RiceTubeFeature2, RiceTubeFeature3, RiceTubeFeature4, RiceTubeFeature5, RiceTubeFeature6, TracheostomyCareImage } from '../../../assets/Images'
import { settings3 } from '../../../assets/ReactMaterials'
import Slider from 'react-slick'
import HomeAttendantCard from '../../../Components/Common/HomeAttendantCard'
import { Grid } from '@mui/material'
import AttendServices from '../../../Components/AttendServices'

const EmergencyNursingCare = () => {

    const [selectedCare, setSelectedCare] = useState('Rice Tube Care');

    const careTypes = [
        {
            name: 'Rice Tube Care',
            image: RiceTubeCareImage,
            description: 'A Rice tube feeding is more than just a medical device; it\'s a lifeline. It\'s specially designed for those who, due to various reasons, cannot consume food the conventional way or have challenges with swallowing. Our dedicated care ensures that every individual receives the essential nutrition they need, seamlessly and safely.',
            features: [
                { name: 'Feeding Tube Principles', imgSrc: RiceTubeFeature1 },
                { name: 'Nutrition and Swallow Therapy', imgSrc: RiceTubeFeature2 },
                { name: 'Speech Therapy', imgSrc: RiceTubeFeature3 },
                { name: 'Psychology and Emotional Wellbeing', imgSrc: RiceTubeFeature4 },
                { name: 'Cognitive Training', imgSrc: RiceTubeFeature5 },
                { name: 'PES Dressing', imgSrc: RiceTubeFeature6 },
            ]
        },
        {
            name: 'Tracheostomy Care',
            image: TracheostomyCareImage,
            description: 'Tracheostomy establishes an alternative breathing channel when the regular airway is hindered, either in part or entirely.',
            features: [
                { name: 'Speech Therapy', imgSrc: RiceTubeFeature3 },
                { name: 'Specialist Consultations', imgSrc: RiceTubeFeature1 },
                { name: 'Bedside Training', imgSrc: RiceTubeFeature2 },
                { name: 'Psychology and Emotional Wellbeing', imgSrc: RiceTubeFeature4 },
                { name: 'Nutrition and Swallow Therapy', imgSrc: RiceTubeFeature5 },
                { name: 'Tracheostomy Tube Changing and Care', imgSrc: RiceTubeFeature6 },
            ]
        },
        {
            name: 'Post Surgical Care',
            image: PostSurgicalCareImage,
            description: 'Post surgical Care is critical and includes everything from pain management and feeding to reparatory management and fluid management. Get well sooner under the care of our nurses, who will help you with all of this in the comfort of your home.',
            features: [
                { name: 'Pain Management', imgSrc: RiceTubeFeature3 },
                { name: 'Physiotherapy', imgSrc: RiceTubeFeature1 },
                { name: 'Infection Control', imgSrc: RiceTubeFeature2 },
                { name: 'Wound/Incision Care', imgSrc: RiceTubeFeature4 },
                { name: 'Psychology and Emotional Wellbeing', imgSrc: RiceTubeFeature4 },
                { name: 'Balance and Mobility', imgSrc: RiceTubeFeature6 },
                { name: 'Nutrition and Swallow Therapy', imgSrc: RiceTubeFeature6 },
                { name: 'Bed mobility and Transfers training', imgSrc: RiceTubeFeature6 },
                { name: 'Wheelchair Mobility', imgSrc: RiceTubeFeature6 },
            ]
        },
        { name: 'Emergency Care', image: EmergencyCareImage, description: 'Emergency care provides immediate treatment for acute illnesses and injuries to prevent long-term disability or death.', features: ['Emergency response', 'Stabilization and treatment', '24/7 availability', 'Critical care management', 'Life-saving interventions'] }
    ];

    const benefits = [
        { imgSrc: 'path/to/benefit1-image.jpg', text: 'Benefit 1 Description' },
        { imgSrc: 'path/to/benefit2-image.jpg', text: 'Benefit 2 Description' },
        { imgSrc: 'path/to/benefit3-image.jpg', text: 'Benefit 3 Description' }
    ];

    const handleCareSelection = (careType) => {
        setSelectedCare(careType);
    };

    const selectedCareData = careTypes.find(care => care.name === selectedCare);


    return (
        <>
            <Wrapper>
                <section className="container-fluid medicalAttend-section">
                    <main className="main-medical-attend">
                        <section className="medicalAttend-Template">
                            <div className="MedicalAttend-slider">
                                <Slider {...settings3}>
                                    <div className="medicalAttend-img-box">
                                        <img src={EmergencyCareSlider1} alt="" />
                                    </div>
                                    <div className="medicalAttend-img-box">
                                        <img src={EmergencyCareSlider1} alt="" />
                                    </div>
                                    <div className="medicalAttend-img-box">
                                        <img src={EmergencyCareSlider1} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <section className="care-selection-container">
                                <div className="main-careSelection">
                                    <div className="care-selection">
                                        {careTypes.map((care, index) => (
                                            <button className={`currentCarer-btn ${selectedCare === care.name ? "active" : ""}`} key={index} onClick={() => handleCareSelection(care.name)}>
                                                <img src={care.image} alt={care.name} />
                                                <p>{care.name}</p>
                                            </button>
                                        ))}
                                    </div>
                                    <div className='selectedCare-section'>
                                        <div className="care-content">
                                            <Grid
                                                container
                                                rowSpacing={4}
                                                columnSpacing={{ xs: 0, sm: 3, md: 3 }}
                                                sx={{ margin: "0 0" }}
                                            >
                                                {selectedCareData.features.map((feature, index) => (
                                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                                        <HomeAttendantCard
                                                            imgSrc={feature.imgSrc}
                                                            description={feature.name}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                            <p>{selectedCareData.description}</p>
                                        </div>
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
                                        {/* {selectedCare === 'Tracheostomy Care' && (
                                            <AttendServices
                                                showBenefits={true}
                                                benefits={benefits}
                                                showService={false}
                                                isPhysioPage={false}
                                                basicStepHeader="Basic Steps for Tracheostomy Care"
                                            />
                                        )} */}
                                    </div>
                                </div>
                            </section>

                        </section>

                        <section className="MedicalAttendSteps">
                            <BasicAttendantSteps imageSrc={BasicAttendImg5} isEmergencyPage={true} />
                        </section>

                        <section className="MedicalAttendService">
                            <main className="main-MedicalNursing">
                                <NursingSkilledSection NursingExpect={false} showPhysioSteps={true} />
                                <div className="medicalAtend-details mt-5">
                                    <div className="NursingService-slider">
                                        <div className="NursingService-header">
                                            <h3>Meet Our Service Provider</h3>
                                        </div>
                                        <NursingServiceSlider />
                                    </div>

                                    <div className="MedicalStaff-section mt-4">
                                        <div className="medicalstaff-header">
                                            <h3>Meet Our Medical Attendant Staff</h3>
                                        </div>
                                        <MedicalStaffSlider />
                                    </div>

                                </div>
                            </main>
                        </section>
                    </main>
                </section>
            </Wrapper>
        </>
    )
}

export default EmergencyNursingCare