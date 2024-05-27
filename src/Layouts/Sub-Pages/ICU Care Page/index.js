import React from 'react'
import { Wrapper } from './Styled'

import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicAttendImg3, Benefits5, Benefits6, Benefits7, Benefits8, Benefits9, ICUCareSlider1,
     InfectionService10, InfectionService11, InfectionService13, InfectionService14, InfectionService15, InfectionService17, InfectionService18, InfectionService19, InfectionService20, InfectionService21,
     InfectionService3,

 } from '../../../assets/Images';
import AttendServices from '../../../Components/AttendServices';
import NursingServiceSlider from '../../../Components/NursingServiceSlider';
import MedicalStaffSlider from '../../../Components/MedicalStaffSlider';
import ReusableAccordion from '../../../Components/Common/Accordion';
import BasicAttendantSteps from '../../../Components/BasicAttendSteps';
import NursingSkilledSection from '../../../Components/NursingSkilledSection';

const ICUCare = () => {

    const ICUCareQuestion = {
        header: "Key components of ICU at home",
        description: "ICU at home provides high dependency care services to patients who are no longer in the acute phase of their illness but are not fully ready for an ICU discharge."
    };
    const homeAttendServices = [
        { imgSrc: InfectionService10, description: "Skilled Nursing Care" },
        { imgSrc: InfectionService11, description: "IV Administration" },
        { imgSrc: InfectionService3, description: "Activities of Daily Livingc" },
        { imgSrc: InfectionService13, description: "Pressure Ulcer Prevention" },
        { imgSrc: InfectionService14, description: "Wound Dressing" },
        { imgSrc: InfectionService15, description: "Care of Tubes and Catheters" },
        { imgSrc: InfectionService17, description: "24x7 Vital Monitoring" },
        { imgSrc: InfectionService17, description: "Infection Control" },
        { imgSrc: InfectionService18, description: "Equipment Handling" },
        { imgSrc: InfectionService19, description: "DVT Prevention" },
        { imgSrc: InfectionService20, description: "Physiotherapy" },
        { imgSrc: InfectionService21, description: "Psychological Counselling" },
        // add other services...
    ];
    const benefits = [
        { imgSrc: Benefits6, text: 'Consistent & Positive Outcomes' },
        { imgSrc: Benefits7, text: 'Doorstep Delivery' },
        { imgSrc: Benefits8, text: 'Branded & Quality Assured Products' },
        { imgSrc: Benefits9, text: 'Warranty Guaranteed' },
        { imgSrc: Benefits5, text: 'Customer rating of 4.9/5' }
    ];

    
    return (
        <>
            <Wrapper>
                <section className='container-fluid ICUCare-section'>
                    <main className='main-ICU-Care'>
                        <section className='ICUCare-Template'>
                            <div className='IcuCare-slider'>
                                <Slider {...settings3}>
                                    <div className="ICUCare-img-box">
                                        <img src={ICUCareSlider1} alt="" />
                                    </div>
                                    <div className="ICUCare-img-box">
                                        <img src={ICUCareSlider1} alt="" />
                                    </div>
                                    <div className="ICUCare-img-box">
                                        <img src={ICUCareSlider1} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <AttendServices
                                header="Services of certified medical attendants for patients in hospitals undergoing treatment"
                                question={ICUCareQuestion}
                                showBenefits={true}
                                benefits={benefits}
                                homeServices={homeAttendServices}
                                basicStepHeader="Basic three steps for best ICU care at home"

                            />
                        </section>

                        <section className='IcuCareSteps'>
                            <BasicAttendantSteps
                                imageSrc={BasicAttendImg3}
                            />
                        </section>

                        <section className="IcuCareService">
                            <main className="main-ICUNursing">
                                <NursingSkilledSection NursingExpect={false} NursingPlace={false} />
                                <div className='icuCare-details mt-5'>
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

                                    <div className='ICUCare-Faq-section'>
                                        <div className="Faq-box">
                                            <div className="Faq-header">
                                                <h3>Frequently Asked Questions</h3>
                                            </div>
                                            <div className="Faq-accordion">
                                                <ReusableAccordion
                                                    title="What is an ICU at home?"
                                                    content="ICU at home refers to the provision of intensive care services ina patient's home setting. It includes continuous monitoring, advanced medical equipment, and specialized care typically found in hospital ICUs. This service is for patients who need intensive care but prefer or benefit from being in a home environment."
                                                />
                                                <ReusableAccordion
                                                    title="How much does it cost to setup ICU at home?"
                                                    content="ICU at home refers to the provision of intensive care services ina patient's home setting. It includes continuous monitoring, advanced medical equipment, and specialized care typically found in hospital ICUs. This service is for patients who need intensive care but prefer or benefit from being in a home environment."
                                                />
                                                <ReusableAccordion
                                                    title="Can a patient go from ICU to home?"
                                                    content="ICU at home refers to the provision of intensive care services ina patient's home setting. It includes continuous monitoring, advanced medical equipment, and specialized care typically found in hospital ICUs. This service is for patients who need intensive care but prefer or benefit from being in a home environment."
                                                />
                                                <ReusableAccordion
                                                    title="Howmany days ICU is normal?"
                                                    content="ICU at home refers to the provision of intensive care services ina patient's home setting. It includes continuous monitoring, advanced medical equipment, and specialized care typically found in hospital ICUs. This service is for patients who need intensive care but prefer or benefit from being in a home environment."
                                                />
                                            </div>
                                        </div>
                                        <div className='question-box'>
                                            <div className='Faq-que'>
                                                <h3>Why ICU charges are high?</h3>
                                            </div>
                                            <div className='Faq-ans'>
                                                <p>Advanced Equipment: ICUs are equipped with sophisticated medical devices for continuous monitoring and life support.
                                                    High Staff-to-Patient Ratio: ICU patients require intensive care, leading to a higher number of medical staff per patient.
                                                    Specialized Care: ICU staff are specially trained to handle critical conditions, and their expertise comes at a premium.
                                                    Medications and Treatments: The drugs and treatments in ICUs are often more expensive.
                                                    Infrastructure: Maintaining a sterile and controlled environment in the ICU is costly</p>
                                            </div>
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

export default ICUCare;