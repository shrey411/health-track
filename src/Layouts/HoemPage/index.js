import React from "react";
import {
    HeaderImg1,
    HeaderImg2,
    HeaderImg3,

    HomeSectionBG,
    NursingService1,
    NursingService2,
    NursingService3,
    vectorImg1,
    vectorImg3,
} from "../../assets/Images";
import { Wrapper } from "./Style";
import Header from "../../Components/Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {  settings1 } from "../../assets/ReactMaterials";
import CardComponent from "../../Components/Common/CardComponent";
import Colors from "../../assets/Colors";
import { FaArrowRightLong } from "../../assets/Icons/index";

const HomePage = () => {
    return (
        <>
            <Wrapper>
                <section className="container-fluid home-section">
                    <main className="main-home-section">
                        <Header />
                        <section className="home-container">
                            {/* <div className='home-box'>
                            <div className='BG-image'>
                                {/* <img src={HoemPageBG} alt='' /> */}
                            {/* </div> */}
                            {/* </div> */}
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
                                                    <input type="text" placeholder="Select Location" />
                                                </div>
                                                <div className="country-box">
                                                    <input type="text" placeholder="Select Catagory" />
                                                </div>
                                            </div>
                                            <div className="form-box3">
                                                <button type="button">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="header-images">
                                <div className="header-part1">
                                    <div className="header-img1">
                                        <img className="custom-img1" src={HeaderImg1} alt="" />
                                    </div>
                                    <div className="header-img4">
                                        <div className="vector-box1">
                                            <img className="vector-style" src={vectorImg1} alt="" />
                                        </div>
                                        <div>
                                            <img className="custom-img2" src={HeaderImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-part2">
                                    <div className="header-img3">
                                        <img className="custom-img3" src={HomeSectionBG} alt="" />
                                    </div>
                                    <div className="header-img2">
                                        <img className="custom-img4" src={HeaderImg3} alt="" />
                                    </div>
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
                                {/* <div className='catagories-slider'>
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            <div>
                                                <h3>1</h3>
                                            </div>
                                            <div>
                                                <h3>2</h3>
                                            </div>
                                            <div>
                                                <h3>3</h3>
                                            </div>
                                            <div>
                                                <h3>4</h3>
                                            </div>
                                            <div>
                                                <h3>5</h3>
                                            </div>
                                            <div>
                                                <h3>6</h3>
                                            </div>
                                            <div>
                                                <h3>7</h3>
                                            </div>
                                            <div>
                                                <h3>8</h3>
                                            </div>
                                            <div>
                                                <h3>9</h3>
                                            </div>
                                        </Slider>
                                    </div>
                                </div> */}
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
                </section>
            </Wrapper>
        </>
    );
};

export default HomePage;
