import styled from "styled-components";
import { FooterBG } from "../../assets/Images";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`
  .container-fluid.footer-section {
    padding: 0px;
    margin: 0px;
  }
  .main-footer {
    display: flex;
    flex-direction: column;
  }

  .footer-part-1 {
    background-image: url(${FooterBG});
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
    align-items: baseline;
    gap: 15px;
  }
  .healthcare-app-detail .app-header h4 {
    font-size: 45px;
    font-family: outfit;
    color: ${Colors.WHITE};
    font-weight: 700;
  }

  .healthcare-app-detail .app-content p {
    font-size: 26px;
    font-family: outfit;
    color: ${Colors.WHITE};
  }

  .healthcare-app-detail .download-source {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
  }

  .healthcare-app-img {
    width: 80%;
  }

  .healthcare-app-img img {
    width: 100%;
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
    width: 65%;
  }
  .media-icon-box .icon-link {
    display: flex;
    gap: 10px;
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

  @media (max-width: 600px) {
    .footer-part-2 .main-part2 {
      grid-template-columns: 1fr;
    }
    .footer-part-2 .main-part2 .quickLinks-box,
    .footer-part-2 .main-part2 .catagories-box,
    .footer-part-2 .main-part2 .company-box {
      display: none;
    }

    .footer-accordion{
        display: block;
        border-bottom : 1px solid gray;
        box-shadow: none;
    }
    
    .footer-accordion::before{
        background-color: none;

    }

  }
`;
