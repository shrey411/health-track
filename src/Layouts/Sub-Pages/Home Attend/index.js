import React from "react";
import {
  CertificationSkill1,
  CertificationSkill2,
  CertificationSkill3,
  Expectation1,
  Expectation2,
  Expectation3,
  Expectation4,
  HomeAttendSlider1,
  HomeNursingVideoImg,
  InfectionService1,
  InfectionService2,
  InfectionService3,
  InfectionService4,
  InfectionService5,
  InfectionService6,
  InfectionService7,
  InfectionService8,
  InfectionService9,

} from "../../../assets/Images";

import { settings3 } from "../../../assets/ReactMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./Styled";
import HomeAttendantCard from "../../../Components/Common/HomeAttendantCard";
import { Grid } from "@mui/material";
import AccordionItem from "../../../Components/Common/FaqAccordion";
import NursingServiceSlider from "../../../Components/NursingServiceSlider";
import MedicalStaffSlider from "../../../Components/MedicalStaffSlider";
import ReusableAccordion from "../../../Components/Common/Accordion";

const HomeAttend = () => {
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
              <div className="HomeAttend-service">
                <div className="main-attend-Box pt-4 pb-5">
                  <div className="HomeAttend-header">
                    <h3>
                      Certified home attendants services for elderly & patients
                    </h3>
                  </div>
                  <div className="sub-attend-box">
                    <div className="home-services">
                      <div className="services-details">
                        <Grid
                          container
                          rowSpacing={4}
                          columnSpacing={{ xs: 0, sm: 3, md: 3 }}
                          sx={{ margin: "0 0" }}
                        >
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService1}
                              description="Infection control &
                              wound dressing"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService2}
                              description="Care of tubes & catheters"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService3}
                              description="Range of motion
                              exercises"
                            />
                          </Grid>

                          {/* Row 2 */}
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService4}
                              description="Emergency drugs"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService5}
                              description="High alert medication"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService6}
                              description="Companionship &
                              emotional support"
                            />
                          </Grid>

                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService7}
                              description="Temperature/BP/
                              Sugar check"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService8}
                              description="Repositioning
                              bedridden patients"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4} md={4}>
                            <HomeAttendantCard
                              imgSrc={InfectionService9}
                              description="Wheelchair support
                              & fall prevention"
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="services-info">
                        <div className="info-question">
                          <h2>
                            Looking for the best male / female nurse for home
                            care? our nurses provide complete Health support
                          </h2>
                          <p>
                            Our skilled nurses & caregivers follow clinical
                            protocols as par with international standards while
                            delivering the best home nurse service.
                          </p>
                        </div>
                      </div>
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
                            <label>Service Requirede</label>
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
                </div>
              </div>
            </section>
            <section className="HomeNursingService">
              <main className="main-HomeNursing">
                <div className="HomeNursing-container">
                  <div className="HomeNursing-faq">
                    <div className="faq-box">
                      <p>Your credible home nursing services are just a call away.</p>
                    </div>
                    <div className="faq-question">
                      <div className="accordion">
                        <AccordionItem number={1} title="Contact Us">
                          <p>You can contact us via email at support@example.com.</p>
                        </AccordionItem>
                        <AccordionItem number={2} title="Choose Attends">
                          <p>Frequently Asked Questions.</p>
                        </AccordionItem>
                        <AccordionItem number={3} title="Pay for the Service">
                          <p>Select the duration of your care plan, pay for the service, and begin your journey with our compassionate Nurses</p>
                        </AccordionItem>
                      </div>

                    </div>
                  </div>
                  <div className="HomeNursing-video">
                    <div className="video-box">
                      <img src={HomeNursingVideoImg} alt="" />
                    </div>
                  </div>
                </div>
              </main>
            </section>
            <section className="Nursing-skilled-container" >
              <main className="main-NursingSkill">
                <div className="NursingSkill-Box">
                  <div className="NursingSkill-ques">
                    <h3>Why choose TTHC for home attendant services?</h3>
                  </div>
                  <div className="NursingSkill-answer">
                    <p>Due to changes in the family structure—from
                      the multi-generation family under one roof to
                      the nuclear family—many of us are facing challenges
                      in caring for our elderly parents. This challenge
                      increases if the children live in one part of the
                      world and the parents in another. Distance can make it
                      difficult to assess a parent’s needs and get them the care
                      they deserve. Tech Tricks Health Care Service is committed
                      to helping you care for the health and well-being of your
                      loved ones. We understand that nothing is better than being
                      in the comfort of home, surrounded by family and friends.
                      We can be there when you can't to help your aging parents
                      and other elderly family members live their golden years at home.
                      We provide health care services at your home. It has a team of
                      well-trained nurses and more supportive staff to take care
                      of elderly, sick, bedridden patients.</p>
                  </div>
                  <div className="NursingSkill-certificate">
                    <div className="Certificate-container">
                      <div className="certificate-1">
                        <img src={CertificationSkill1} alt="" />
                        <h5>Highest Customer Rating</h5>
                      </div>
                      <div className="certificate-2">
                        <img src={CertificationSkill2} alt="" />
                        <h5>First Priority Customer Satisfaction</h5>
                      </div>
                      <div className="certificate-3">
                        <img src={CertificationSkill3} alt="" />
                        <h5>Experienced Certified Staff</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="NursingExpect-section">
                  <div className="NursingExpect-header">
                    <h3>What to Expect</h3>
                  </div>
                  <div className="NursingExpect-items">
                    <div className="expectation-container">
                      <div className="expectation-box1">
                        <div className="expectation-img">
                          <img src={Expectation1} alt="" />
                        </div>
                        <div className="expectation-text">
                          <p>12/24 hour Nursing Services</p>
                        </div>
                      </div>
                      <div className="expectation-box2">
                        <div className="expectation-img">
                          <img src={Expectation2} alt="" />
                        </div>
                        <div className="expectation-text">
                          <p>Free
                            Doctor Consultation</p>
                        </div>
                      </div>
                      <div className="expectation-box3">
                        <div className="expectation-img">
                          <img src={Expectation3} alt="" />
                        </div>
                        <div className="expectation-text">
                          <p>Background check for all Nurse</p>
                        </div>
                      </div>
                      <div className="expectation-box4">
                        <div className="expectation-img">
                          <img src={Expectation4} alt="" />
                        </div>
                        <div className="expectation-text">
                          <p>Trained Nurse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="NursingPlace-service">
                  <div className="NursingPlace-header">
                    <h3>Because there is no place like home</h3>
                  </div>
                  <div className="NursingPlace-content">
                    <p>We intend to be the most trusted home healthcare partner to our clients and deliver people-centric, high quality patient care to them in the comfort of their homes.</p>
                    <ul>
                      <li>Bedridden Care.</li>
                      <li>Help for daily Activities of a senior citizen.</li>
                      <li>Care for loved one recovering from Surgery.</li>
                      <li>Tracheostomy Care at Home.</li>
                      <li>Care for patients recovering Stroke</li>
                    </ul>
                  </div>
                </div>

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
              </main>
            </section>
          </main>
        </section >
      </Wrapper >
    </>
  );
};

export default HomeAttend;
