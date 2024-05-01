import styled from "styled-components";
import { ClientInfoTemp, HomePageBG } from "../../assets/Images";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`
  .container-fluid.home-section {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .main-home-section {
    width: 100%;
    background-image: url(${HomePageBG});
  }
  .home-box .BG-image img {
    width: 100%;
  }
  .home-container {
    display: grid;
    grid-template-columns: 55% 45%;
  }
  .Health-Service-Form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-section.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 16px;
    padding: 0px;
  }
  .header-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .header-images .header-part1 {
    display: flex;
    width: 100%;
  }

  .header-images .header-part1 img {
    width: 100%;
  }

  .header-img4 {
    display: flex;
    flex-direction: column;
  }
  .header-images .header-img1 .custom-img1 {
    width: 100%;
    height: 77%;
    // margin-top: 15%;
  }
  .header-images .header-img4 .custom-img2 {
    width: 76%;
    margin-left: 13%;
  }
  .header-img1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  .header-images .header-img3 img {
    width: 100%;
  }
  .header-img2 {
    width: 20%;
    position: absolute;
    right: 8%;
    top: 70%;
  }
  .header-img2 .custom-img4 {
    width: 100%;
  }
  .header-section .box3-form {
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .form-box1 {
    width: 100%;
    height: 70px;
  }

  .form-box2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
  }
  .form-box3 {
    width: 100%;
    height: 60px;
    position: relative;
    color: ${Colors.WHITE};
  }
  .location-box,
  .country-box {
    width: 47%;
    position: relative;
  }
  .form-box2 .location-box input,
  .form-box2 .country-box input {
    width: 100%;
    height: 100%;
    border-radius: 68.67px;
    padding-left: 50px;
    border: 2px solid ${Colors.BORDER_COLOR1};
    outline: none;
  }

  .location-box .input-icon,
  .country-box .input-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 22px;
    color: ${Colors.ICON_COLOR};
  }

  .form-box3 .input-icon {
    position: absolute;
    top: 50%;
    left: 41%;
    transform: translateY(-50%);
    font-size: 26px;
  }

  .form-box1 input,
  .form-box3 button {
    width: 100%;
    height: 100%;
    padding-left: 30px;
    border-radius: 68.67px;
    border: 2px solid ${Colors.BORDER_COLOR1};
    outline: none;
  }
  .form-box3 button {
    background: rgba(255, 60, 72, 1);
    border: none;
    padding-left: 8px;
    color: ${Colors.WHITE};
  }

  .box1-head h4 {
    font-size: 26px;
    font-family: outfit;
  }
  .box2-head h2 {
    font-size: 3.5rem;
    font-family: outfit;
    font-weight: 700;
  }

  // responsive header-section

  @media (max-width: 1287px) {
    .box2-head h2 {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 1177px) {
    .form-group {
      gap: 30px;
    }
    .box2-head h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1103px) {
    .box2-head h2 {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 1024px) and (max-width: 1103px) {
    .box2-head h2 {
      font-size: 2.7rem;
    }
    .form-box1,
    .form-box2 {
      height: 60px;
    }

    .form-box3 {
      height: 50px;
    }
    .form-box3 .input-icon {
      left: 38%;
    }
  }

  @media (max-width: 1024px) {
    .box1-head h4 {
      font-size: 22px;
    }
    .box2-head h2 {
      font-size: 2.6rem;
    }
    .form-box1,
    .form-box2 {
      height: 60px;
    }

    .form-box3 {
      height: 50px;
    }
    .form-box3 .input-icon {
      left: 36%;
    }
  }

  // Catagories-section

  .catagories-section {
    width: 100%;
  }

  .catagories-section .main-catagories {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-catagories .catagories-container {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .catagories-container .header-box span {
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
  }

  .catagories-service .catagories-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .catagories-service .catagories-info h3 {
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
  }

  .catagories-slider {
    width: 100%;
  }

  .catagories-slider .catagorie-img-box {
    // width: 350px;
  }
  .catagories-slider .catagorie-img-box img {
    width: 335px;
  }

  .catagories-service .catagories-info p {
    font-weight: 300;
    font-family: outfit;
  }

  .slick-dots ul li button:before {
    font-size: 24px !important;
    color: gray;
  }

  .slick-dots ul li {
    margin: 0px 10px;
  }

  .slick-dots ul li.slick-active button:before {
    color: red; /* Change the color of the active dot here */
  }

  // Nursing-service

  .nursing-section {
    width: 100%;
  }
  .nursing-section .main-nursing {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-nursing .nursing-container {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .nursing-container .header-box span {
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
  }

  .nursing-service .nursing-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nursing-service .nursing-info h3 {
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
  }

  .nursing-service .nursing-info p {
    font-weight: 300;
    font-family: outfit;
  }

  .nursing-slider {
    width: 100%;
  }

  .nursing-moreInfo .more-info-btn {
    background-color: ${Colors.BLACK};
    color: ${Colors.WHITE};
    width: 160px;
    height: 40px;
  }

  //  clients-template

  .clients-template {
    width: 100%;
  }
  .clients-template .client-container {
    // background-image: url(${ClientInfoTemp});
    // height: 200px;
  }

  .clients-template .client-container .client-details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${ClientInfoTemp});
    height: 200px;
  }

  .client-details .info-box1 {
    width: 24%;
  }

  .client-details .info-box1 p {
    font-size: 22px;
    font-weight: 400;
    font-family: outfit;
    color: ${Colors.WHITE};
  }

  .client-details .info-box2,
  .info-box3,
  .info-box4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16%;
  }
  .info-box4 h4,
  .info-box2 h4,
  .info-box3 h4 {
    font-size: 48px;
    color: ${Colors.WHITE};
  }

  .info-box4 h5,
  .info-box2 h5,
  .info-box3 h5 {
    width: 58%;
    font-size: 21px;
    color: ${Colors.WHITE};
  }

  // client-templete responsive

  @media (min-width: 1100px) and (max-width: 1200px) {
    .client-details .info-box1 p {
      font-size: 18px;
    }
    .info-box4 h4,
    .info-box2 h4,
    .info-box3 h4 {
      font-size: 45px;
    }

    .info-box4 h5,
    .info-box2 h5,
    .info-box3 h5 {
      font-size: 18px;
      width: 58%;
    }
  }

  @media (min-width: 1023px) and (max-width: 1100px) {
    .client-details .info-box1 {
      width: 26%;
    }
    .info-box4 h4,
    .info-box2 h4,
    .info-box3 h4 {
      font-size: 43px;
    }

    .info-box4 h5,
    .info-box2 h5,
    .info-box3 h5 {
      font-size: 17px;
      width: 48%;
    }
  }

  // Hospitals section

  .hospitals-section {
    width: 100%;
  }
  .hospitals-section .main-hospitals {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-hospitals .hospitals-container {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .hospitals-container .header-box span {
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
  }

  .hospitals-service .hospitals-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hospitals-service .hospitals-info h3 {
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
  }

  .hospitals-service .hospitals-info p {
    font-weight: 300;
    font-family: outfit;
  }

  .hospitalCard-details {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hospital-moreInfo .more-info-btn {
    background-color: ${Colors.BLACK};
    color: ${Colors.WHITE};
    width: 200px;
    height: 40px;
  }

  // Transportation-vehicle section

  .Transportation-Vehicle-section {
    width: 100%;
  }

  .Transportation-Vehicle-section .main-vehicle-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .main-vehicle-section .vehicle-container {
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-vehicle-section .vehicle-parts {
    background-color: ${Colors.BACKGROUND_COLOR2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450px;
  }

  .vehicle-container .header-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .vehicle-container .header-box h4 {
    color: ${Colors.BACKGROUND_COLOR1};
    font-family: outfit;
    font-size: 20px;
    font-weight: 300;
  }

  .vehicle-container .header-info {
    display: flex;
    justify-content: space-between;
  }

  .vehicle-container .header-info h3 {
    color: ${Colors.WHITE};
    font-size: 45px;
    font-family: outfit;
    font-weight: 500;
    width: 40%;
  }
  .vehicle-container .header-info p {
    color: ${Colors.WHITE};
    font-size: 20px;
    font-family: outfit;
    font-weight: 300;
    width: 49%;
  }
  .vehicle-details {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    margin-top: -8%;
  }

  .vehicle-moreInfo .more-info-btn {
    background-color: ${Colors.BLACK};
    color: ${Colors.WHITE};
    width: 200px;
    height: 40px;
  }

  // Transportation-vehicle section responsive

  @media (max-width: 1266px) {
    .vehicle-container .header-info p {
      width: 44%;
    }
    .vehicle-container .header-info h3 {
      width: 47%;
    }
  }
  @media (max-width: 1080px) {
    .vehicle-container .header-info h3 {
      font-size: 41px;
    }
    .vehicle-container .header-info p {
      font-size: 18px;
    }
  }

  @media (max-width: 985px) {
    .vehicle-container .header-info h3 {
      font-size: 38px;
    }
    .vehicle-details {
      margin-top: -14%;
  }
    .main-vehicle-section .vehicle-parts {
      height: 400px;
    }
    .vehicle-container .header-info p {
      font-size: 16px;
    }

  }

  @media (max-width: px) {

    
  }

  // client-review-service

  .client-review-section {
    width: 100%;
  }
  .client-review-section .main-client-review {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-client-review .client-review-container {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .client-review-container .header-box span,
  .client-content-box1 .customer-box span {
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
  }

  .client-rating-box .client-rating-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .client-rating-box .client-rating-info h3 {
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
  }

  .client-rating-box .client-rating-info p {
    font-weight: 300;
    font-family: outfit;
  }

  .client-rating-slider {
    width: 100%;
  }

  .clientSlider-1 {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .clientSlider-1 .client-content-box1 {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: column;
  }

  .clientSlider-1 .client-content-box1 .client-review p {
    font-size: 22px;
    font-family: outfit;
    font-weight: 400;
    text-align: center;
  }

  .client-content-box1 .customer-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .client-content-box1 .customer-box h4 {
    font-size: 26px;
    font-family: outfit;
    font-weight: 500;
  }

  .client-rating-slider .slick-dots {
    position: relative;
  }
  .client-rating-slider .slick-dots li {
    margin: 0px 15px;
  }

  .client-rating-slider .slick-dots .slick-active span {
    background-color: ${Colors.BACKGROUND_COLOR1};
  }
  .slick-dots li span {
    background-color: gray;
  }

  // client-review-service responsive

  @media (max-width: 1300px) {
    .clientSlider-1 .client-content-box1 .client-review {
      width: 90%;
    }
  }

  @media (max-width: 840px) {
    .clientSlider-1 .client-content-box1 .client-review p {
      font-size: 20px;
    }
  }

  //  hc-process-container

  .hc-process-section {
    width: 100%;
    // background-color: ${Colors.BACKGROUND_COLOR2};
  }

  .process-box {
    display: grid;
    grid-template-columns: 55% 45%;
    align-items: center;
    background-color: ${Colors.BACKGROUND_COLOR2};
  }

  .process-box .header-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 70px;
    // width: 55%;
  }

  .process-box .header-box .sub-box1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .process-box .header-box .sub-box1,
  .process-box .header-box .service-steps {
    width: 70%;
  }

  .process-box .header-box .sub-box1 h4 {
    color: ${Colors.BACKGROUND_COLOR1};
    font-family: outfit;
    font-size: 20px;
    font-weight: 300;
  }

  .process-box .header-box .sub-box1 p {
    color: ${Colors.WHITE};
    font-family: outfit;
    font-size: 22px;
    font-weight: 300;
  }

  .process-box .header-box .sub-box1 h2 {
    font-size: 42px;
    font-family: outfit;
    font-weight: 500;
    color: ${Colors.WHITE};
  }
  .header-box .service-steps {
    //  position: absolute;
    // display: flex;
    // justify-content: space-between;
    display: flex;
    gap: 30px;
    // top: 325px;
    // width: 100%;
  }

  .service-steps .step-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .service-steps img {
    width: 50px;
    height: 50px;
  }

  .horizontal-line {
    height: 2px;
    background-color: gray;
    width: 80%;
    position: absolute;
    top: 36px;
    transform: translateX(21.5%);
  }

  .step-box .content h5 {
    color: white;
    text-align: center;
  }

  .step-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${Colors.BACKGROUND_COLOR2};
    border: 2px solid blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .step-circle img {
    width: 40px;
    height: 40px;
  }

  .nursing-img-box {
    // width: 45%;
    width: 100%;
  }
  .nursing-img-box img {
    width: 100%;
  }

  @media (max-width: 1290px) {

    .process-box .header-box {
      gap: 50px;
    }
    .process-box .header-box .sub-box1 h2 {
      font-size: 39px;
    }
    .horizontal-line {
      width: 73%;
      transform: translateX(18.5%);
    } 
  }

  @media (max-width: 1230px) {

    .content h5{
       font-size: 1.2rem;
    }
    .process-box .header-box .sub-box1 p {
      font-size: 20px;

    }
    .horizontal-line {
      width: 74%;

    }
  }

  @media (max-width: 1198px) {

    .process-box .header-box .sub-box1 h2 {
      font-size: 35px;
    }
    .process-box .header-box {
      gap: 35px;
    }
    .content h5{
      font-size: 1.1rem;
   }

  }

  @media (max-width: 1130px) {
    .content h5{
      font-size: 1rem;
   }
  }
  @media (max-width: 1076px) {

    .process-box .header-box .sub-box1 h2 {
      font-size: 33px;
    }
    .process-box .header-box .sub-box1 p {
      font-size: 19px;
    }
    .step-circle img {
       width: 35px;
       height: 35px
    }
    .step-circle {
        width: 75px;
        height: 75px;
    }
  }

  @media (max-width: 1060px) {

    .process-box .header-box .service-steps {
      width: 75%;
    }
    .process-box .header-box {
      gap: 10px;
    }
  }

  


  //   @media (max-width: 1024px) {
  //     /* Reduce padding and spacing */
  //     .process-box {
  //       gap: 40px; /* Reduce gap between sections */
  //     }

  //     .process-box .header-box {
  //       width: 60%; /* Give more width to the header box */
  //     }

  //     .process-box .header-box .sub-box1 {
  //       gap: 15px; /* Reduce gap in the sub-box */
  //     }

  //     .process-box .header-box .sub-box1 h4 {
  //       font-size: 18px; /* Decrease font size */
  //     }

  //     .process-box .header-box .sub-box1 p {
  //       font-size: 20px; /* Adjust font size */
  //     }

  //     .process-box .header-box .sub-box1 h2 {
  //       font-size: 36px; /* Adjust font size */
  //     }

  //     .header-box .service-steps {
  //       gap: 25px; /* Decrease gap in service steps */
  //     }

  //     .horizontal-line {
  //       transform: translateX(20%); /* Adjust the horizontal line */
  //     }

  //     .service-steps .step-box {
  //       gap: 12px; /* Decrease gap in step box */
  //     }

  //     .step-circle {
  //       width: 70px; /* Adjust step circle size */
  //       height: 70px;
  //     }

  //     .step-circle img {
  //       width: 35px;
  //       height: 35px;
  //     }

  //     .nursing-img-box {
  //       width: 40%; /* Reduce image box width */
  //     }
  //   }
`;
