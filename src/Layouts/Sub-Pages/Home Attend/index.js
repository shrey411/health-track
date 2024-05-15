import React from "react";
import {
  HomeAttendSlider1,
  HomeNursingVideoImg,


} from "../../../assets/Images";

import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./Styled";
import NursingServiceSlider from "../../../Components/NursingServiceSlider";
import MedicalStaffSlider from "../../../Components/MedicalStaffSlider";
import ReusableAccordion from "../../../Components/Common/Accordion";
import AttendServices from "../../../Components/AttendServices";
import BasicAttendantSteps from "../../../Components/BasicAttendSteps";
import NursingSkilledSection from "../../../Components/NursingSkilledSection";

const HomeAttend = () => {

  const homeAttendQuestion = {
    header: "Looking for the best male / female nurse for home care? Our nurses provide complete Health support",
    description: "Our skilled nurses & caregivers follow clinical protocols as par with international standards while delivering the best home nurse service."
  };
  return (
    <>
      <Wrapper>
        <section className="container-fluid homeAttend-section">
          <main className="main-home-attend">
            <section className="AttendTemplate-container">
              <div className="HomeAttend-slider">
                <Slider {...settings3}>
                  <div className="attend-img-box">
                    <img src={HomeAttendSlider1} alt="" />
                  </div>
                  <div className="attend-img-box">
                    <img src={HomeAttendSlider1} alt="" />
                  </div>
                  <div className="attend-img-box">
                    <img src={HomeAttendSlider1} alt="" />
                  </div>
                </Slider>
              </div>
              <AttendServices
                header="Certified home attendants services for elderly & patients"
                question={homeAttendQuestion}
                showBenefits={false}
              />
            </section>
            
            <BasicAttendantSteps
             imageSrc={HomeNursingVideoImg}
            />
            <section className="Nursing-skilled-container" >
              <main className="main-NursingSkill">
                <NursingSkilledSection NursingExpect={true}/>
                <div className="NursingService-slider">
                  <div className="NursingService-header">
                    <h3>Meet Our Service Provider</h3>
                  </div>
                  <NursingServiceSlider />
                </div>

                <div className="MedicalStaff-section">
                  <div className="medicalstaff-header">
                    <h3>Meet Our Medical Attendant Staff</h3>
                  </div>
                  <MedicalStaffSlider />
                </div>
              </main>
            </section>

            <section className="CaregiverPlan-container">
              <div className="CaregiverPlan-section">
                <div className="CaregiverPlan-template">
                  <div className="Temp-header">
                    <h3>Choose your caregiver plan</h3>
                  </div>
                  <div className="CaregiverPlane-Time">
                    <div className="Time-Box1">
                      <h5>24 Hours </h5>
                      <p>Choose between 1 provider or 2
                        providers who will stay with you to
                        provide care through out the day and
                        night.X</p>
                    </div>
                    <div className="Time-Box2">
                      <h5>12 Hours </h5>
                      <p>Choose between your required shift for the
                        duration of 12 hours, day or night, For example,
                        8PM-BAM or 8AM - 8PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="HomeAttend-Question">
              <main className="main-Question">
                <div className="Question-container mt-5">
                  <div className="question-box">
                    <div className="question-text">
                      <h3>TTHC home attendant services</h3>
                    </div>
                    <div className="question-content">
                      <p>Our service providers are spread across different locations, work at different intervals, and speak multiple languages. We are always closer to you. Enjoy the comfort and access to a spectrum of medical services right from your home. A trustworthy source of personalized health care services that can be accessed from anywhere in the hour of need.</p>
                    </div>
                  </div>
                  <div className="question-box">
                    <div className="question-text">
                      <h3>Our expert home attendant</h3>
                    </div>
                    <div className="question-content">
                      <p>Our attendants for senior citizens or nursing attendants at home are a highly skilled caregiver, well-trained to meet the specific needs of our clients. We place a strong emphasis on caregiver selection and training, ensuring that all professionals are well-prepared to provide top-notch care. Our unwavering commitment to delivering excellence in patient or senior care is evident in how we proactively address any skill gaps through extensive on-the-job training for our team members.</p>
                    </div>
                  </div>
                  <div className="question-box">
                    <div className="question-text">
                      <h3>What to expect from tech tricks healthcare services at home?</h3>
                    </div>
                    <div className="question-content">
                      <p>Home Health care Nursing starts only after the recommendation of a doctor, and it is important for the patient to see a home nurse as often as a doctor. The nursing services as mentioned before are provided by registered nurses who help in ongoing medical support and rehabilitative care.</p>
                    </div>
                  </div>
                  <div className="question-box">
                    <div className="Faq-header">
                      <h3>Frequently Asked Questions</h3>
                    </div>
                    <div className="Faq-accordion">
                      <ReusableAccordion
                        title="What are the roles & responsibilities of a home attendant?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                      <ReusableAccordion
                        title="What is the cost of home attendant?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                      <ReusableAccordion
                        title="When do you need in home patient attendants do?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                      <ReusableAccordion
                        title="How do you maintain the quality of your home attendant services?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                      <ReusableAccordion
                        title="Are your attendants available for 24hous care?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                      <ReusableAccordion
                        title="Can my attendants be replaced?"
                        content="The responsibilities of a patient attendant (at home) usually involve delivering care and support services that are personalized to unique requirements, and who can easily integrate with your loved ones. Our skilled Home Attendants are here to assist with all aspects of daily living, including bathing, dressing, grooming, and medication management. Patient attendants (including a female or male attendant for elderly) may also assist with patient mobility, turning and repositioning, monitoring vital signs, providing companionship, and reporting any changes in the patient's condition to the healthcare team. Their responsibilities may also include maintaining a clean and safe environment for the patient, providing emotional support, and following care plans as directed by healthcare professionals."
                      />
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </main>
        </section >
      </Wrapper >
    </>
  );
};

export default HomeAttend;
