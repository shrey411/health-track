import React from 'react'
import { Wrapper } from './Styled'

import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicAttendImg2, MedicalAttendSlider1 } from '../../../assets/Images';
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