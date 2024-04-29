import React from "react";
import {
    CatagorieImg1,
    CatagorieImg2,
    CatagorieImg3,
    CatagorieImg4,
    CatagorieImg5,
    FirstKit1,
    FirstKit2,
    FirstKit3,
    FirstKit4,
    FiveStarIcon,
    // HeaderImg1,
    // HeaderImg2,
    // HeaderImg3,
    // HomeSectionBG,
    // vectorImg1,

    HeaderMainImg,

    NursingImg1,
    NursingService1,
    NursingService2,
    NursingService3,
    VehicleImg1,
    VehicleImg2,
    VehicleImg3,
    vectorImg3,
} from "../../assets/Images";
import { Wrapper } from "./Style";
import Header from "../../Components/Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings, settings1, settings2 } from "../../assets/ReactMaterials";
import { Grid } from '@mui/material';

import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


import CardComponent from "../../Components/Common/CardComponent";
import Colors from "../../assets/Colors";
import { FaArrowRightLong, GrLocation, IoLayersOutline, RiSearchLine } from "../../assets/Icons/index";
import HospitalCard from "../../Components/Common/HospitalCard";
import VehicleCard from "../../Components/Common/VehicleCard";
import FAQSection from "../../Components/FAQSection/FAQSection";


const HomePage = () => {
    return (
        <>
            <Wrapper>
                <section className="container-fluid home-section">
                    <main className="main-home-section">
                        <Header />
                        <section className="home-container mt-4">
                            <div className="Health-Service-Form">
                                <div className="header-section container">
                                    <div className="box1-head">
                                        <h4>Discover Medical Service Around You!</h4>
                                    </div>
                                    <div className="box2-head">
                                        <h2>Let’s Find An Amazing</h2>
                                        <h2>Service For you</h2>
                                    </div>
                                    <div className="vectore-Img3">
                                        <img src={vectorImg3} alt="" />
                                    </div>
                                    <div className="box3-form">
                                        <form className="form-group">
                                            <div className="form-box1">
                                                <input
                                                    type="text"
                                                    placeholder="What are you Looking for?"
                                                />
                                            </div>
                                            <div className="form-box2">
                                                <div className="location-box">
                                                    <span className="input-icon">
                                                        <GrLocation />
                                                    </span>
                                                    <input type="text" placeholder="Select Location" />
                                                </div>
                                                <div className="country-box">
                                                    <span className="input-icon">
                                                        <IoLayersOutline />
                                                    </span>
                                                    <input type="text" placeholder="Select Catagory" />
                                                </div>
                                            </div>
                                            <div className="form-box3">
                                                <span className="input-icon">
                                                    <RiSearchLine />
                                                </span>
                                                <button type="button">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="header-images">
                                <div className="header-part1">
                                    <img src={HeaderMainImg} alt="" />

                                </div>

                            </div>
                        </section>
                    </main>
                    <section className="catagories-section mt-5">
                        <main className="main-catagories">
                            <div className="catagories-container">
                                <div className="header-box">
                                    <span>CATAGORIES</span>
                                </div>
                                <div className="catagories-service">
                                    <div className="catagories-info">
                                        <h3>Explore Services</h3>
                                        <p>
                                            Explore some of the best tips from around the city from
                                            our partners and friends.
                                        </p>
                                    </div>
                                </div>
                                <div className='catagories-slider'>
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            <div className="catagorie-img-box">
                                                <img src={CatagorieImg1} alt="" />
                                            </div>
                                            <div className="catagorie-img-box">
                                                <img src={CatagorieImg2} alt="" />
                                            </div>
                                            <div className="catagorie-img-box">
                                                <img src={CatagorieImg3} alt="" />
                                            </div>
                                            <div className="catagorie-img-box">
                                                <img src={CatagorieImg4} alt="" />
                                            </div>
                                            <div className="catagorie-img-box">
                                                <img src={CatagorieImg5} alt="" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                    <section className="nursing-section mt-5">
                        <main className="main-nursing">
                            <div className="nursing-container">
                                <div className="header-box">
                                    <span>NURSING SERVICE</span>
                                </div>
                                <div className="nursing-service">
                                    <div className="nursing-info">
                                        <h3>Find Service Provider</h3>
                                        <p>
                                            Explore some of the best tips from around the city from
                                            our partners and friends.
                                        </p>
                                    </div>
                                </div>
                                <div className="nursing-slider">
                                    <div className="slider-container">
                                        <Slider {...settings1}>
                                            <div className="medicalService-box1">
                                                <CardComponent
                                                    title="Apple Hospitals and Research Institute LTD"
                                                    description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                                                    imgSrc={NursingService1}
                                                    color={Colors.BACKGROUND_COLOR3}
                                                />
                                            </div>
                                            <div className="medicalService-box2">
                                                <CardComponent
                                                    title="Apple Hospitals and Research Institute LTD"
                                                    description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                                                    imgSrc={NursingService2}
                                                    color={Colors.BACKGROUND_COLOR4}
                                                />
                                            </div>
                                            <div className="medicalService-box3">
                                                <CardComponent
                                                    title="Apple Hospitals and Research Institute LTD"
                                                    description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                                                    imgSrc={NursingService3}
                                                    color={Colors.BACKGROUND_COLOR5}
                                                />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="nursing-moreInfo">
                                    <button type="button" className="more-info-btn" color="dark">
                                        View More <FaArrowRightLong />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </section>
                    <section className="clients-template mt-5">
                        <div className="client-container">
                            <div className="client-details">
                                <div className="info-box1">
                                    <p>Trusted by Over 22,000+ Clients WorldWide</p>
                                </div>
                                <div className="info-box2">
                                    <h4>15k</h4>
                                    <h5>Total Verified Listings</h5>
                                </div>
                                <div className="info-box3">
                                    <h4>40k</h4>
                                    <h5>Our Happy Clients</h5>
                                </div>
                                <div className="info-box4">
                                    <h4>5.6k</h4>
                                    <h5>Places In The World</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="hospitals-section mt-5">
                        <main className="main-hospitals">
                            <div className="hospitals-container">
                                <div className="header-box">
                                    <span>HOSPITALS</span>
                                </div>
                                <div className="hospitals-service">
                                    <div className="hospitals-info">
                                        <h3>Find Hospitals Near You</h3>
                                        <p>
                                            Explore some of the best tips from around the city from
                                            our partners and friends.
                                        </p>
                                    </div>
                                </div>
                                <div className="hospitalCard-details">
                                    <Grid container rowGap={4} columnSpacing={3} sx={{ width: "100%", margin: "0 0" }}>
                                        {/* Row 1, Column 1 */}
                                        <Grid item xs={12} sm={6} md={6}>
                                            <HospitalCard />
                                        </Grid>

                                        {/* Row 1, Column 2 */}
                                        <Grid item xs={12} sm={6} md={6}>
                                            <HospitalCard />
                                        </Grid>

                                        {/* Row 2, Column 1 */}
                                        <Grid item xs={12} sm={6} md={6}>
                                            <HospitalCard />
                                        </Grid>

                                        {/* Row 2, Column 2 */}
                                        <Grid item xs={12} sm={6} md={6}>
                                            <HospitalCard />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="hospital-moreInfo mt-5">
                                    <button type="button" className="more-info-btn" color="dark">
                                        View All Hospitals &nbsp;<FaArrowRightLong />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </section>
                    <section className="Transportation-Vehicle-section mt-5">
                        <main className="main-vehicle-section">
                            <div className="vehicle-parts">
                                <div className="vehicle-container">
                                    <div className="header-box">
                                        <AnimationOnScroll animateIn='animate__rotateInDownLeft'
                                        >
                                            <h4>TRANSPORTATION</h4>
                                        </AnimationOnScroll>
                                        <div className="header-info">
                                            <h3>Medical Transportation Vehicle Service</h3>
                                            <p>There are many variations of passages of
                                                Lorem Ipsum available, but the majority
                                                have suffered alteration in some form,
                                                by injected humour, or randomised words
                                                which don't look even slightly believable.
                                                If you are going to use a passage of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vehicle-details">
                                <Grid container rowGap={4} columnSpacing={3} sx={{ width: "91%", margin: "0 0" }}>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg1} title="Ambulance" description="From ₹55/km" />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg2} title="Private" description="From ₹55/km" />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg3} title="Private" description="From ₹55/km" />
                                    </Grid>

                                    {/* Row 2 */}
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg3} title="Private" description="From ₹55/km" />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg1} title="Ambulance" description="From ₹55/km" />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <VehicleCard imgSrc={VehicleImg2} title="Private" description="From ₹55/km" />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="vehicle-moreInfo mt-5">
                                <button type="button" className="more-info-btn" color="dark">
                                    View All Vehicle &nbsp;<FaArrowRightLong />
                                </button>
                            </div>
                        </main>
                    </section>
                    <section className="client-review-section mt-5">
                        <main className="main-client-review">
                            <div className="client-review-container">
                                <div className="header-box">
                                    <AnimationOnScroll animateIn="animate__fadeInDown">
                                        <span>TESTIMONIALS</span>
                                    </AnimationOnScroll>
                                </div>
                                <div className="client-rating-box">
                                    <div className="client-rating-info">
                                        <h3>What Our Client Says</h3>
                                    </div>
                                </div>
                                <div className="client-rating-slider mt-5">
                                    <div className="slider-container">
                                        <Slider {...settings2}>
                                            <div className="clientSlider-1 ">
                                                <div className="client-content-box1 container">
                                                    <div className="rating-icon">
                                                        <img src={FiveStarIcon} alt="" />
                                                    </div>
                                                    <div className="client-review">
                                                        <p>Contrary to popular belief, Lorem Ipsum
                                                            is not simply random text. It has roots
                                                            in a piece of classical Latin literature
                                                            from 45 BC, making it over 2000 years old.
                                                            Richard McClintock, a Latin professor at
                                                            Hampden-Sydney College in Virginia, looked
                                                            up one of the more obscure Latin words,
                                                            consectetur, from a Lorem Ipsum passage,
                                                            and going through the cites of the word
                                                            in classical literature</p>
                                                    </div>
                                                    <div className="customer-box">
                                                        <h4>Daniel Miller</h4>
                                                        <span>Happy Customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clientSlider-1">
                                                <div className="client-content-box1 container">
                                                    <div className="rating-icon">
                                                        <img src={FiveStarIcon} alt="" />
                                                    </div>
                                                    <div className="client-review">
                                                        <p>Contrary to popular belief, Lorem Ipsum
                                                            is not simply random text. It has roots
                                                            in a piece of classical Latin literature
                                                            from 45 BC, making it over 2000 years old.
                                                            Richard McClintock, a Latin professor at
                                                            Hampden-Sydney College in Virginia, looked
                                                            up one of the more obscure Latin words,
                                                            consectetur, from a Lorem Ipsum passage,
                                                            and going through the cites of the word
                                                            in classical literature</p>
                                                    </div>
                                                    <div className="customer-box">
                                                        <h4>Daniel Miller</h4>
                                                        <span>Happy Customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clientSlider-1">
                                                <div className="client-content-box1 container">
                                                    <div className="rating-icon">
                                                        <img src={FiveStarIcon} alt="" />
                                                    </div>
                                                    <div className="client-review">
                                                        <p>Contrary to popular belief, Lorem Ipsum
                                                            is not simply random text. It has
                                                            in a piece of classical Latin literature
                                                            from 45 BC, making it over 2000 years old.
                                                            Richard McClintock, a Latin professor at
                                                            Hampden-Sydney College in Virginia, looked
                                                            up one of the more obscure Latin words,
                                                            consectetur, from a Lorem Ipsum passage,
                                                            and going through the cites of the word
                                                            in classical literature</p>
                                                    </div>
                                                    <div className="customer-box">
                                                        <h4>Daniel Miller</h4>
                                                        <span>Happy Customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clientSlider-1">
                                                <div className="client-content-box1 container">
                                                    <div className="rating-icon">
                                                        <img src={FiveStarIcon} alt="" />
                                                    </div>
                                                    <div className="client-review">
                                                        <p>Contrary to popular belief, Lorem Ipsum
                                                            is not simply random text. It has roots
                                                            in a piece of classical Latin literature
                                                            from 45 BC, making it over 2000 years old.
                                                            Richard McClintock, a Latin professor at
                                                            Hampden-Sydney College in Virginia, looked
                                                            up one of the more obscure Latin words,
                                                            consectetur, from a Lorem Ipsum passage,
                                                            and going through the cites of the word
                                                            in classical literature</p>
                                                    </div>
                                                    <div className="customer-box">
                                                        <h4>Daniel Miller</h4>
                                                        <span>Happy Customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                    <section className="mt-5">
                        <section className="hc-process-section">
                            <main className="main-hc-process">
                                <div className="hc-process-container">
                                    <div className="process-box">
                                        <div className="header-box">
                                            <div className="sub-box1">
                                                <AnimationOnScroll animateIn="animate__fadeInDown">
                                                    <h4>HOW IT WORKS?</h4>
                                                </AnimationOnScroll>
                                                <h2>Unforgettable Health Care Experiences Await For You</h2>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </div>

                                            <AnimationOnScroll animateIn="animate__fadeInLeft" style={{ display: 'flex', justifyContent: "center" }}> {/* Use CSS class for animation */}
                                                <div className="horizontal-line"></div>
                                                <div className="service-steps">
                                                    <div className="step-box">
                                                        <div className="step-circle">
                                                            <img src={FirstKit1} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h5>Choose Services</h5>
                                                        </div>
                                                    </div>
                                                    <div className="step-box">
                                                        <div className="step-circle">
                                                            <img src={FirstKit2} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h5>Book Your Service</h5>
                                                        </div>
                                                    </div>
                                                    <div className="step-box">
                                                        <div className="step-circle">
                                                            <img src={FirstKit3} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h5>Receive Your Service</h5>
                                                        </div>
                                                    </div>
                                                    <div className="step-box">
                                                        <div className="step-circle">
                                                            <img src={FirstKit4} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h5>Share Feedback</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AnimationOnScroll>
                                        </div>

                                        <div className="nursing-img-box">
                                            <img src={NursingImg1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </section>
                        <FAQSection />
                    </section>
                </section >
            </Wrapper >
        </>
    );
};

export default HomePage;




