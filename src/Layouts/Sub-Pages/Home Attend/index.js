import React from "react";
import {
  HomeAttendSlider1,
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
            <section className="HomeNursingSecrvice">
              <main className="main-HomeNursing">
                <div className="HomeNursing-container">

                </div>
              </main>
            </section>
          </main>
        </section>
      </Wrapper>
    </>
  );
};

export default HomeAttend;
