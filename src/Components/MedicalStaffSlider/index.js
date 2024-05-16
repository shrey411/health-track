import React from "react";

import {
  MedicalStaffImg1,
  MedicalStaffImg2,
  MedicalStaffImg3,
  MedicalStaffImg4,
} from "../../assets/Images";
import Colors from "../../assets/Colors";
import { settings4 } from "../../assets/ReactMaterials";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRightLong } from "../../assets/Icons/index";
import { Wrapper } from "./Styled";
import MedicalStaffCard from "../Common/MedicalStaffCard";

const MedicalStaffSlider = () => {
  return (
    <>
      <Wrapper>
        <div className="medicalStaff-slider">
          <div className="slider-container">
            <Slider {...settings4}>
              <div className="medicalStaff-box1">
                <MedicalStaffCard
                  title="Apple Hospitals and Research Institute LTD"
                  description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                  imgSrc={MedicalStaffImg1}
                  color={Colors.BACKGROUND_COLOR3}
                />
              </div>
              <div className="medicalStaff-box2">
                <MedicalStaffCard
                  title="Apple Hospitals and Research Institute LTD"
                  description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                  imgSrc={MedicalStaffImg2}
                  color={Colors.BACKGROUND_COLOR4}
                />
              </div>
              <div className="medicalStaff-box3">
                <MedicalStaffCard
                  title="Apple Hospitals and Research Institute LTD"
                  description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                  imgSrc={MedicalStaffImg3}
                  color={Colors.BACKGROUND_COLOR5}
                />
              </div>
              <div className="medicalStaff-box3">
                <MedicalStaffCard
                  title="Apple Hospitals and Research Institute LTD"
                  description="525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
                  imgSrc={MedicalStaffImg4}
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
  );
};

export default MedicalStaffSlider;
