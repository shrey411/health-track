import React from 'react'

import { NursingService1, NursingService2, NursingService3 } from '../../assets/Images'
import CardComponent from '../Common/CardComponent'
import Colors from '../../assets/Colors'
import { settings1 } from '../../assets/ReactMaterials'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {FaArrowRightLong} from '../../assets/Icons/index'
import { Wrapper } from './Styled'

const NursingServiceSlider = () => {
    return (
        <>
        <Wrapper>
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
            </Wrapper>
        </>
    )
}

export default NursingServiceSlider


