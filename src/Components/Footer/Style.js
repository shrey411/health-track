import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`
  .container-fluid.footer-section {
    padding: 0px;
    margin: 0px;
    position: relative;
  }
  .main-footer {
    display: flex;
    flex-direction: column;
  }

  .footer-part-1 {
    background-color: #d8e7ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-part-1 .footer-img-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 89%;
  }
  .healthcare-app-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    
  }
  .healthcare-app-detail .service-details {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
    width: 85%;
  }
  .healthcare-app-detail .app-header ,
  .healthcare-app-detail .app-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .healthcare-app-detail .app-header h4 {
    font-size: 40px;
    font-family: outfit;
    font-weight: 700;
  }

  .healthcare-app-detail .app-content p {
    font-size: 14px;
    font-weight: 500;
    color: #525252;
  }

  .phone-input{
    display: flex;
    align-items: center;
  }
  .phone-input .phone-btn {
    width: 150px;
    height: 50px;
  }
  .submit-button {
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    outline: none;
    border: none;
    background-color: #1463f3; 
    color: ${Colors.WHITE};
  }
  .phone-input .PhoneInputCountry {
    width: 62px;
    height: 50px;
    background-color: white;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    disply: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0px;
  }

  .phone-input .PhoneInputInput {
    border: none;
    flex: none;
    width: 250px;
    height: 50px;
    background-color: #f8f8f9;
    outline: none;
    padding-left: 10px; 
  }
  .healthcare-app-detail .service-details .left-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .healthcare-app-detail .service-details .left-box .service-1 {
    display: flex;
    justify-content: space-between;
  }
  .service1-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d8e7ff;
    border: 1px solid #1463f3;
    box-shadow: 0px 1.5px 6.5px 0px #1463f3;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .service1-icon span {
    font-size: 25px;
    color: #1463f3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .service-1 .service-info p {
    font-size: 24px;
    font-weight: 500;
    color: #212529;
  }
  .service-1 .service-info span {
    font-size: 18px;
    font-weight: 400;
    color: #525252;
  }
  .service-details .left-box .service-1 .service-info {
    width: 70%;
  }

  .healthcare-app-img {
    display: flex;
    justify-content: center;
  }

  .healthcare-app-img img {
    width: 70%;
  }

  // Footer-part-2
  .footer-part-2 {
    display: flex;
    justify-content: center;
  }
  .footer-part-2 .main-part2 {
    display: grid;
    width: 92%;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  .footer-part-2 .main-part2 .social-media-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .footer-part-2 .main-part2 .social-media-box p {
    font-size: 20px;
    font-family: outfit;
    font-weight: 300;
    margin: 0px;
  }

  .media-icon-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }
  .media-icon-box .icon-link {
    display: flex;
    gap: 25px;
    padding: 0px;
  }
  .media-icon-box .icon-link a {
    text-align: left;
    color: gray;
    text-decoration: none;
    font-size: 20px;
  }

  .footer-part-2 .main-part2 .quickLinks-box,
  .footer-part-2 .main-part2 .catagories-box,
  .footer-part-2 .main-part2 .company-box {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 20px;
  }
  .footer-part-2 .main-part2.quickLinks-box h5,
  .footer-part-2 .main-part2.catagories-box h5,
  .footer-part-2 .main-part2.company-box h5 {
    font-size: 23px;
    font-family: outfit;
    font-weight: 500;
  }

  .link-list {
    display: flex;
    flex-direction: column;
    padding: 0px;
    font-size: 18px;
    font-weight: 400;
    font-family: outfit;
    gap: 10px;
  }
  .link-list a {
    list-style: none;
    text-align: left;
    color: Black;
    text-decoration: none;
  }

  //   footer-part-3

  .footer-part-3 {
    border-top: 1px solid gray;
  }

  .main-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-part-3 .copyright-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .copyright-info .info-list {
    display: flex;
    padding: 0px;
    font-size: 16px;
    font-weight: 400;
    font-family: outfit;
    gap: 10px;
  }
  .copyright-info .info-list a {
    list-style: none;
    text-align: left;
    color: Black;
    text-decoration: none;
  }
  .footer-accordion {
    display: none;
  }

  @media (max-width: 1200px) {
    .healthcare-app-detail .app-header h4 {
      font-size: 40px;
    }
    .healthcare-app-detail .app-content p {
      font-size: 22px;
    }
    .download-source .playstore-box,
    .download-source .apple-box {
      width: 46%;
    }
    .download-source .playstore-box img,
    .download-source .apple-box img {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    .healthcare-app-detail .app-header h4 {
      font-size: 34px;
    }
    .healthcare-app-detail .app-content p {
      font-size: 20px;
    }
    .healthcare-app-img {
      width: 100%;
    }
  }

  @media (max-width: 890px) {
    .footer-part-2 .main-part2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1200px) {
    .healthcare-app-detail .service-details {
      grid-template-columns: 2fr 2fr;
      gap: 35px;
      width: 95%;
  }

  .healthcare-app-detail .service-details .left-box {
     justify-content: normal; 
    gap: 35px;
  }

    .service-details {
      flex-basis: 50%;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .healthcare-app-detail .service-details .left-box .service-1 {
      width: 100%;
  }
  .healthcare-app-img {
    grid-row: span 2;
  }
  .healthcare-app-img  img{
    width: 90%;
  }
}

  @media (max-width: 600px) {
    .footer-part-2 .main-part2 {
      grid-template-columns: 1fr;
    }
    .footer-part-2 .main-part2 .quickLinks-box,
    .footer-part-2 .main-part2 .catagories-box,
    .footer-part-2 .main-part2 .company-box {
      display: none;
    }

    .footer-accordion {
      display: block;
      border-bottom: 1px solid gray;
      box-shadow: none;
    }

    .footer-accordion::before {
      background-color: none;
    }

    .media-icon-box {
      width: 65%;
    }

    .media-icon-box .icon-link {
      width: 57%;
      justify-content: space-between;
    }

    .healthcare-app-img {
      display: none;
    }
    .healthcare-app-detail {
      padding: 20px 0px;
    }
    .healthcare-app-detail .app-header h4 {
      font-size: 30px;
    }
    
    .phone-input .PhoneInputInput {
      height: 40px;
      width: 168px;
    }
    .phone-input .PhoneInputCountry {
      height: 40px;
    }
    .healthcare-app-detail .service-details {
      grid-template-columns: 1fr;
    }
    .phone-input .phone-btn {
      width: 139px;
      height: 40px;
      font-size: 14px;
    }
  }
  @media (max-width: 450px) {
    .phone-input .phone-btn {
      width: 100px;
    }
    .submit-button {
      font-size: 12px;
    }
    .healthcare-app-detail .app-header h4 {
      font-size: 23px;
   }
   .healthcare-app-detail .app-content p {
    font-size: 15px;
   }
   .media-icon-box {
    width: 85%;
   }
  }

  @media (max-width: 450px) {
   .media-icon-box {
     width: 95%;
    }
  }

  @media (max-width: 350px) {
        .phone-input .PhoneInputInput {
            height: 40px;
            width: 140px;
        }
        .phone-input .phone-btn {
          width: 70px;
      }
    }
`;
