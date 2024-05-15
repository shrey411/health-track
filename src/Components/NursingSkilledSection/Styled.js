import styled from "styled-components";

export const Wrapper = styled.section`
width: 92%;
display: flex;
align-items: baseline;
justify-content: center;
flex-direction: column;
gap: 30px;
padding: 30px 0px;
  
  .NursingSkill-Box .NursingSkill-ques h3 {
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  }
  .NursingSkill-Box .NursingSkill-answer p {
    font-size: 20px;
    font-family: outfit;
    font-weight: 300;
  }
  
  @media (max-width: 1024px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 38px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 32px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 18px;
    }
  }
  
  @media (max-width: 650px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 30px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 16px;
    }
  }
  
  @media (max-width: 426px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 26px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 14px;
    }
  }
  
  @media (max-width: 400px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 24px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 13px;
    }
  }
  @media (max-width: 340px) {
    .NursingSkill-Box .NursingSkill-ques h3 {
      font-size: 20px;
    }
    .NursingSkill-Box .NursingSkill-answer p {
      font-size: 12px;
    }
  }
  
  
  .NursingExpect-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .NursingExpect-section .NursingExpect-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .NursingExpect-section .NursingExpect-header h3 {
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  }
  
  .NursingExpect-items .expectation-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 84%;
  }
  
  .expectation-container .expectation-box1 ,
  .expectation-container .expectation-box2 ,
  .expectation-container .expectation-box3 ,
  .expectation-container .expectation-box4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .expectation-box1 .expectation-img ,
  .expectation-box2 .expectation-img ,
  .expectation-box3 .expectation-img ,
  .expectation-box4 .expectation-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .expectation-box1 .expectation-img img,
  .expectation-box2 .expectation-img img,
  .expectation-box3 .expectation-img img,
  .expectation-box4 .expectation-img img{
    width: 70%;
  }
  
  .expectation-box1 .expectation-text p,
  .expectation-box2 .expectation-text p,
  .expectation-box3 .expectation-text p,
  .expectation-box4 .expectation-text p{
    font-size: 18px;
    font-family: outfit;
    font-weight: 400;
    text-align: center;
  }
  
  @media (max-width: 1024px) {
    .NursingExpect-section .NursingExpect-header h3 {
      font-size: 38px;
    }
    .expectation-box1 .expectation-img img,
    .expectation-box2 .expectation-img img,
    .expectation-box3 .expectation-img img,
    .expectation-box4 .expectation-img img  {
      width: 60%;
    }
  }
  
  @media (max-width: 768px) {
    .NursingExpect-section .NursingExpect-header h3 {
      font-size: 32px;
    }
  
    .NursingExpect-items .expectation-container {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 5%;
      column-gap: 5%;
    }
  }
  
  @media (max-width: 650px) {
    .NursingExpect-section .NursingExpect-header h3 {
      font-size: 32px;
  
    }
  }
  
  @media (max-width: 426px) {
    .NursingExpect-section .NursingExpect-header h3 {
      font-size: 28px;
  
    }}
  
  @media (max-width: 400px) {
    .NursingExpect-section .NursingExpect-header h3 {
      font-size: 25px;
    }
  }
  
    @media (max-width: 340px) {
      .NursingExpect-section .NursingExpect-header h3 {
        font-size: 24px;
    
      }
   }
  
  
  
  
  // NursingPlaces
  
  .NursingPlace-service {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  
  .NursingPlace-header h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  }
  
  .NursingPlace-service .NursingPlace-content p,
  .NursingPlace-service .NursingPlace-content ul li{
    font-size: 20px;
    font-family: outfit;
    font-weight: 400;
  }
  
  @media (max-width: 1024px) {
  
    .NursingPlace-header h3 {
      font-size: 38px;
    }
  }
  
  @media (max-width: 768px) {
    .NursingPlace-header h3 {
      font-size: 32px;
  
    }
    .NursingPlace-service .NursingPlace-content p,  .NursingPlace-service .NursingPlace-content ul li {
      font-size: 20px;
    }
  }
  
  @media (max-width: 650px) {
    .NursingPlace-header h3 {
      font-size: 32px;
    }
    .NursingPlace-service .NursingPlace-content p,  .NursingPlace-service .NursingPlace-content ul li {
      font-size: 18px;
    }
  }
  
  @media (max-width: 426px) {
    .NursingPlace-header h3 {
      font-size: 28px;
    }
    .NursingPlace-service .NursingPlace-content p,  .NursingPlace-service .NursingPlace-content ul li {
      font-size: 17px;
    }
  }
  
  @media (max-width: 400px) {
    .NursingPlace-header h3 {
      font-size: 25px;
    }
    }
  
    @media (max-width: 340px) {
      .NursingPlace-header h3 {
        font-size: 24px;
    
      }
   }



`