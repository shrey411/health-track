import React from 'react'
import { Wrapper } from './Styled'

import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    BasicAttendImg2, Benefits1, Benefits2, Benefits3, Benefits4, Benefits5, MedicalAttendSlider1,
    InfectionService1, InfectionService2, InfectionService3, InfectionService4, InfectionService5, InfectionService6, InfectionService7, InfectionService8,InfectionService9
} from '../../../assets/Images';
import AttendServices from '../../../Components/AttendServices';
import NursingServiceSlider from '../../../Components/NursingServiceSlider';
import MedicalStaffSlider from '../../../Components/MedicalStaffSlider';
import ReusableAccordion from '../../../Components/Common/Accordion';
import BasicAttendantSteps from '../../../Components/BasicAttendSteps';
import NursingSkilledSection from '../../../Components/NursingSkilledSection';

const MedicalAttend = () => {

    const medicalAttendQuestion = {
        header: "Our uurses provide complete health support",
        description: "Our Skilled Certified Nurses follow clinical protocol as per with Hospital guideline. while delivering the best Medical Attendant Services."
    };
    const benefits = [
        { imgSrc: Benefits1, text: 'Consistent & Positive Outcomes' },
        { imgSrc: Benefits2, text: 'Doorstep Delivery' },
        { imgSrc: Benefits3, text: 'Branded & Quality Assured Products' },
        { imgSrc: Benefits4, text: 'Warranty Guaranteed' },
        { imgSrc: Benefits5, text: 'Customer rating of 4.9/5' }
    ];
    const homeAttendServices = [
        { imgSrc: InfectionService1, description: "Infection control & wound dressing" },
        { imgSrc: InfectionService2, description: "Care of tubes & catheters" },
        { imgSrc: InfectionService3, description: "Range of motion exercises" },
        { imgSrc: InfectionService4, description: "Emergency drugs" },
        { imgSrc: InfectionService5, description: "High alert medication" },
        { imgSrc: InfectionService6, description: "Companionship & emotional support" },
        { imgSrc: InfectionService7, description: "emperature/BP/Sugar check" },
        { imgSrc: InfectionService8, description: "Repositioning bedridden patients" },
        { imgSrc: InfectionService9, description: "Wheelchair support & fall prevention" },
        // add other services...
    ];

    return (
        <>
            <Wrapper>
                <section className='container-fluid medicalAttend-section'>
                    <main className='main-medical-attend'>
                        <section className='medicalAttend-Template'>
                            <div className='MedicalAttend-slider'>
                                <Slider {...settings3}>
                                    <div className="medicalAttend-img-box">
                                        <img src={MedicalAttendSlider1} alt="" />
                                    </div>
                                    <div className="medicalAttend-img-box">
                                        <img src={MedicalAttendSlider1} alt="" />
                                    </div>
                                    <div className="medicalAttend-img-box">
                                        <img src={MedicalAttendSlider1} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <AttendServices
                                header="Services of certified medical attendants for patients in hospitals undergoing treatment"
                                question={medicalAttendQuestion}
                                showBenefits={true}
                                benefits={benefits}
                                homeServices={homeAttendServices}
                                basicStepHeader="Basic three steps for best medical attendant care at hospital"

                            />
                        </section>

                        <section className='MedicalAttendSteps'>
                            <BasicAttendantSteps
                                imageSrc={BasicAttendImg2}
                            />
                        </section>

                        <section className="MedicalAttendService">
                            <main className="main-MedicalNursing">
                                <NursingSkilledSection NursingExpect={false} />
                                <div className='medicalAtend-details mt-5'>
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


                                    <div className="question-box">
                                        <div className="Faq-header">
                                            <h3>Frequently Asked Questions</h3>
                                        </div>
                                        <div className="Faq-accordion">
                                            <ReusableAccordion
                                                title="Typically what services does a medical attendant?"
                                                content="Tech tricks healthcare nurses are trained across specialties. Along with post-surgery care, medication management, chronic condition support, injury care, eldercare support, we also have nurses who specialize in dementia, Alzheimer's and cardiac care. This is not an exhaustive list, so please get in touch with our team so that they can fully understand your requirements."
                                            />
                                            <ReusableAccordion
                                                title="Do you have short and long duration plans?"
                                                content="Tech tricks healthcare nurses are trained across specialties. Along with post-surgery care, medication management, chronic condition support, injury care, eldercare support, we also have nurses who specialize in dementia, Alzheimer's and cardiac care. This is not an exhaustive list, so please get in touch with our team so that they can fully understand your requirements."
                                            />
                                            <ReusableAccordion
                                                title="Which City do you provide ?"
                                                content="Tech tricks healthcare nurses are trained across specialties. Along with post-surgery care, medication management, chronic condition support, injury care, eldercare support, we also have nurses who specialize in dementia, Alzheimer's and cardiac care. This is not an exhaustive list, so please get in touch with our team so that they can fully understand your requirements."
                                            />
                                        </div>
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

export default MedicalAttend