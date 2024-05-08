import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`
  .Faq-section {
    width: 100%;
  }

  .Faq-section .main-Faq .Faq-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.BACKGROUND_COLOR7};
  }

  .main-Faq .Faq-container {
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .Faq-container .Faq-left-part {
    width: 50%;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 20px;
  }

  .Faq-left-part .header-box h5 {
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
  }
  .Faq-left-part .question-header h3 {
    font-size: 42px;
    font-family: outfit;
    font-weight: 500;
    color: ${Colors.FONT_COLOR1};

  }
  .question-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .question-container span {
    font-size: 30px;
    font-family: outfit;
    font-weight: 500;
    color: ${Colors.FONT_COLOR1};
  }

  .question-container p {
    font-size: 24px;
    font-family: outfit;
    font-weight: 400;
    color: ${Colors.FONT_COLOR1};
  }

  .Faq-container .Faq-right-part {
    width: 40%;
  }

  .Faq-container .Faq-right-part img {
    width: 100%;
  }

  @media (max-width: 1300px) {
    .Faq-left-part .question-header h3 {
      font-size: 40px;
    }

    .question-container span {
      font-size: 27px;
    }

    .question-container p {
      font-size: 20px;
    }
  }

  @media (max-width: 1230px) {
    .Faq-left-part .question-header h3 {
      font-size: 38px;
    }

    .question-container span {
      font-size: 27px;
    }

    .question-container p {
      font-size: 20px;
    }
  }

  @media (max-width: 1170px) {
    .Faq-left-part .question-header h3 {
      font-size: 35px;
    }
  }

  @media (max-width: 1078px) {
    .Faq-left-part .question-header h3 {
      font-size: 33px;
    }
    .question-container span {
      font-size: 25px;
    }

    .question-container p {
      font-size: 18px;
    }
  }

  @media (min-width: 900px) and (max-width: 1018px) {
    .Faq-left-part .question-header h3 {
      font-size: 32px;
    }
    .question-container span {
      font-size: 23px;
    }

    .question-container p {
      font-size: 17px;
    }
  }

  @media (min-width: 650px) and (max-width: 900px) {
    .Faq-left-part .question-header h3 {
      font-size: 24px;
    }
    .question-container span {
      font-size: 20px;
    }

    .question-container p {
      font-size: 14px;
    }
    .Faq-container .Faq-right-part {
      height: 550px;
    }
    .Faq-right-part .faq-img-box {
      height: 100%;
    }
    .Faq-right-part .faq-img-box img {
      height: 100%;
    }
  }

  @media (max-width: 650px) {

    .Faq-container .Faq-left-part {
      width: 100%;
    }
    .Faq-container .Faq-right-part {
      display: none;
    }
     .question-container span{
      font-size: 23px;

     }
  }

  @media (max-width: 426px) {
    
    .Faq-left-part .question-header h3 {
      font-size: 28px;
    }
    .question-container span{
      font-size: 20px;
     }
     .question-container p {
      font-size: 16px;
    }
    .Faq-left-part .header-box h5 {
      font-size: 15px;
    }
  }

`;
