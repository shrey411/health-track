import styled from "styled-components";
import Colors from "../../../assets/Colors";

export const Wrapper = styled.section`

// AttendTemplate-container
  .container-fluid.homeAttend-section {
    padding: 0px;
  }
  .attend-img-box img {
    width: 100%;
  }
  .slick-dots {
    bottom: 20px;
  }

  .slick-dots ul li button:before {
    font-size: 24px !important;
    opacity: 1;
    color: white;
  }

  .slick-dots ul li {
    margin: 0px 10px;
  }

  .slick-dots ul li.slick-active button:before {
    color: ${Colors.BACKGROUND_COLOR1}; /* Change the color of the active dot here */
  }

  .HomeAttend-service .main-attend-Box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
    background-color: ${Colors.BACKGROUND_COLOR11}
  }

  .HomeAttend-service .main-attend-Box .HomeAttend-header{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .HomeAttend-service .main-attend-Box .HomeAttend-header h3{
    font-size: 50px;
    font-family: outfit;
    font-weight: 600 ;
    width: 84%;
    text-align: center;
  }
  .HomeAttend-service .main-attend-Box .sub-attend-box {
    display: grid;
    grid-template-columns: 65% 35%;
    width: 90%;
  }

  .main-attend-Box .sub-attend-box .home-services {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .home-services .services-info .info-question{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   
  }
  .services-info .info-question h2 {
    font-size: 40px;
    font-family: outfit;
    font-weight: 600 ;
  }
  .services-info .info-question p {
    font-size: 24px;
    font-family: outfit;
    font-weight: 400 ;
  }


  .sub-attend-box .home-Appointment-box{
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
  }
  
  
  .home-Appointment-box .HomeAttendent-form{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 17px;
    background-color: ${Colors.BACKGROUND_COLOR9};
    border-radius: 15px;
  }

  .HomeAttendent-form .form-box{
    display: flex;
    flex-direction: column;
  }

  .HomeAttendent-form .form-section {
    width: 100%;
    display: flex;
    flex-direction : column;
    gap: 15px;
  }
  .HomeAttendent-form .form-section .form-btn,
  .HomeAttendent-form .form-section .form-box {
    width: 100%;
    display: flex;
    flex-direction : column;
    gap: 10px;
  }

  .HomeAttendent-form .form-section .form-box input{
      height: 60px;
      outline: none;
      border: none;
      border-radius: 6px;
      padding-left: 20px;
    }
    .HomeAttendent-form .form-section .form-btn button{
        height: 60px;
        border-radius: 6px;
        border: none;
        color: ${Colors.WHITE};
        background-color: ${Colors.BACKGROUND_COLOR1};
  }


  //  HomeNursing-section

  .HomeNursingService .main-HomeNursing {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.BACKGROUND_COLOR4};
  }

  .main-HomeNursing .HomeNursing-container {
    width: 92%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 25px 0px;
  }

  .HomeNursing-faq .faq-box p {
    font-size: 20px;
    font-family: outfit;
    font-weight: 400;
  }

  .HomeNursing-container .HomeNursing-video {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .HomeNursing-video .video-box{
     width: 78%;
  }

  .HomeNursing-video .video-box img {
    width: 100%;
  }

// Nursing-skill section

.Nursing-skilled-container .main-NursingSkill {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.BACKGROUND_COLOR11} ;
  gap: 30px;
  padding: 35px 0px;
}

.main-NursingSkill .NursingSkill-Box {
  width: 92%;
  padding: 30px 0px;
  display: flex;
  flex-direction : column;
  align-items: baseline;
  gap: 15px;
}

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

.NursingSkill-certificate {
  width: 100%;
    display: flex;
    justify-content: center;
}

.NursingSkill-certificate .Certificate-container {
  display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    width: 70%;
    align-items: center;
}

.Certificate-container .certificate-1,
.Certificate-container .certificate-2,
.Certificate-container .certificate-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.Certificate-container .certificate-1 img,
.Certificate-container .certificate-2 img,
.Certificate-container .certificate-3 img{
  width: 38%;
}


.NursingExpect-section {
  width: 92%;
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

.expectation-box1 .expectation-img img,
.expectation-box2 .expectation-img img,
.expectation-box3 .expectation-img img,
.expectation-box4 .expectation-img img{
  width: 85%;
}

.expectation-box1 .expectation-text p,
.expectation-box2 .expectation-text p,
.expectation-box3 .expectation-text p,
.expectation-box4 .expectation-text p{
  font-size: 18px;
  font-family: outfit;
  font-weight: 400;
}

.NursingPlace-service {
  width: 92%;
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

//  NursingService-slider

  .NursingService-slider,
  .MedicalStaff-section {
    width: 92%;
  }

  .NursingService-header h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  } 

  .CaregiverPlan-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(180 217 220 / 47%);
  }

  .CaregiverPlan-container .CaregiverPlan-section {
    width: 92%;
  }

  .CaregiverPlan-section .CaregiverPlan-template{
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: baseline;
  }
  .CaregiverPlan-template .Temp-header h3{
    width: 85%;
  }
  .CaregiverPlan-template .Temp-header h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  }

  .CaregiverPlan-template .CaregiverPlane-Time{
    display: flex;
    gap: 10px;
    padding: 36px 0px;
    justify-content: space-around;
  }

  .CaregiverPlane-Time .Time-Box1 ,
  .CaregiverPlane-Time .Time-Box2 {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
    border: 2px solid rgba(20, 99, 243, 1);
    width: 43%;
    height: 220px;
    padding: 18px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .Time-Box1 p ,
  .Time-Box2 p {
    font-size: 21px;
  } 
}

// HomeAttend-Question section

.HomeAttend-Question .main-Question{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.BACKGROUND_COLOR11};
}

.main-Question .Question-container{
  width: 92%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Question-container .question-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
}


.question-box .question-text h3{
  font-size: 38px;
  font-family: outfit;
  font-weight: 500;
}

.question-box .question-content p{
  font-size: 18px;
  font-family: outfit;
  font-weight: 400;
}

`;
