import React from "react";
import { Wrapper } from "./Styled";
import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import { 
    InfectionService1, InfectionService2, InfectionService3, InfectionService4, InfectionService5, InfectionService6, InfectionService7, InfectionService8,InfectionService9,
    PhysiotherapySlider1,
    BasicAttendImg4

} from "../../../assets/Images";
import AttendServices from "../../../Components/AttendServices";
import NursingSkilledSection from "../../../Components/NursingSkilledSection";
import NursingServiceSlider from "../../../Components/NursingServiceSlider";
import MedicalStaffSlider from "../../../Components/MedicalStaffSlider";
import ReusableAccordion from "../../../Components/Common/Accordion";
import BasicAttendantSteps from "../../../Components/BasicAttendSteps";

const Physiotherapy = () => {

    const medicalAttendQuestion = {
        header: "Our uurses provide complete health support",
        description: "Our Skilled Certified Nurses follow clinical protocol as per with Hospital guideline. while delivering the best Medical Attendant Services."
    };
    // const benefits = [
    //     { imgSrc: Benefits1, text: 'Consistent & Positive Outcomes' },
    //     { imgSrc: Benefits2, text: 'Doorstep Delivery' },
    //     { imgSrc: Benefits3, text: 'Branded & Quality Assured Products' },
    //     { imgSrc: Benefits4, text: 'Warranty Guaranteed' },
    //     { imgSrc: Benefits5, text: 'Customer rating of 4.9/5' }
    // ];
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
        <section className="container-fluid medicalAttend-section">
          <main className="main-medical-attend">
            <section className="medicalAttend-Template">
              <div className="MedicalAttend-slider">
                <Slider {...settings3}>
                  <div className="medicalAttend-img-box">
                    <img src={PhysiotherapySlider1} alt="" />
                  </div>
                  <div className="medicalAttend-img-box">
                    <img src={PhysiotherapySlider1} alt="" />
                  </div>
                  <div className="medicalAttend-img-box">
                    <img src={PhysiotherapySlider1} alt="" />
                  </div>
                </Slider>
              </div>
              <AttendServices
                header="Physiotherapy is a healing method focused on mobility. Physiotherapists help patients regain mobility, as far as possible."
                question={medicalAttendQuestion}
                showBenefits={false}
                homeServices={homeAttendServices}
              />
            </section>

            <section className="MedicalAttendSteps">
              <BasicAttendantSteps imageSrc={BasicAttendImg4} showPhysioFaq={true}/>
            </section>

            <section className="MedicalAttendService">
              <main className="main-MedicalNursing">
                <NursingSkilledSection NursingExpect={false} showPhysioSteps={true}/>
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

                  <div className="question-box">
                    <div className="Faq-header">
                      <h3>Frequently Asked Questions</h3>
                    </div>
                    <div className="Faq-accordion">
                      <ReusableAccordion
                        title="How do I book your virtual physiotherapy Services?"
                        content="The best way to book virtual physiotherapy services is through our app 
                        Download our app 
                        Select the expert your choice 
                        Choose your available time slot 
                        Start the service or you can call +91-9861806040 book the slot."
                       />
                      <ReusableAccordion
                        title="How do I know if I need physiotherapy treatment?"
                        content="Tech tricks healthcare nurses are trained across specialties. Along with post-surgery care, medication management, chronic condition support, injury care, eldercare support, we also have nurses who specialize in dementia, Alzheimer's and cardiac care. This is not an exhaustive list, so please get in touch with our team so that they can fully understand your requirements."
                      />
                      <ReusableAccordion
                        title="Who provides Physiotherapy at Home?"
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
  );
};

export default Physiotherapy;
