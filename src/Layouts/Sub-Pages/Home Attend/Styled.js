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

  @media ( max-width:1024px) {
    .HomeNursing-video .video-box {
      width: 85%;
    }
  }
  @media (max-width: 769px) {
    .HomeNursing-video .video-box {
      width: 90%;
    }
  }
  @media (max-width: 650px) {
    .main-HomeNursing .HomeNursing-container {
      grid-template-columns: none;
      grid-template-rows: 1fr .9fr;
    }
    .HomeNursing-video .video-box {
      width: 80%;
    }
    .HomeNursing-container .HomeNursing-video {
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    .HomeNursing-video .video-box {
      width: 90%;
    }
  }





// Nursing-skill section ==> in Certificate Component

.Nursing-skilled-container .main-NursingSkill {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.BACKGROUND_COLOR11} ;
  gap: 30px;
}


//  NursingService-slider

  .NursingService-slider,
  .MedicalStaff-section {
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 30px;
  }

  .NursingService-header h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  } 

@media (max-width: 768px) {
  .NursingService-header h3 ,
  .medicalstaff-header h3 {
    font-size: 32px;
  }
}

@media (max-width: 650px) {
  .NursingService-header h3 ,
  .medicalstaff-header h3 {
    font-size: 32px;
  }
}

@media (max-width: 426px) {
  .NursingService-header h3 ,  .medicalstaff-header h3 {
    font-size: 28px;
  }
}

@media (max-width: 400px) {
  .NursingService-header h3 ,  .medicalstaff-header h3 {
    font-size: 25px;
  }
  .expectation-box1 .expectation-text p,  .expectation-box2 .expectation-text p,  .expectation-box3 .expectation-text p,  .expectation-box4 .expectation-text p {
    font-size: 16px;
  }

}

  @media (max-width: 340px) {
    .NursingService-header h3 ,  .medicalstaff-header h3{

      font-size: 24px;
    }
    .expectation-box1 .expectation-text p,  .expectation-box2 .expectation-text p,  .expectation-box3 .expectation-text p,  .expectation-box4 .expectation-text p {
      font-size: 14px;
    } 
 }


  // CaregiverPlan section


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

  @media (max-width: 1024px){
    .CaregiverPlan-template .Temp-header h3{
      font-size: 38px;
    }
    .Time-Box1 p ,
    .Time-Box2 p {
      font-size: 17px;
    } 
  }

  @media (max-width: 820px) {

    .CaregiverPlan-section .CaregiverPlan-template {
      grid-template-columns: none;
      grid-template-rows: .5fr 1fr;
      align-items: center;
    }
    .CaregiverPlan-template .Temp-header h3 {
       width: 100%; 
  }

    .CaregiverPlan-template .CaregiverPlane-Time {
      padding: 0px 0px 30px 0px;
      justify-content: space-evenly;
    }
  }
  @media (max-width: 550px) {
    .CaregiverPlan-template .Temp-header h3 {
      font-size: 34px;
    }
    .CaregiverPlan-section .CaregiverPlan-template {
      grid-template-rows: .4fr 1fr;
    }
    .CaregiverPlan-template .CaregiverPlane-Time {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    .CaregiverPlane-Time .Time-Box1,  .CaregiverPlane-Time .Time-Box2 {
      width: 80%;
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
  gap: 30px;
}

.Question-container .question-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: baseline;
}


.question-box .question-text h3,
.question-box .Faq-header h3 {
  font-size: 38px;
  font-family: outfit;
  font-weight: 500;
}

.question-box .question-content p{
  font-size: 18px;
  font-family: outfit;
  font-weight: 400;
}

@media (max-width: 768px) {
  .question-box .question-text h3 ,
  .question-box .Faq-header h3 {
    font-size: 34px;
  }
  .question-box .question-content p {
    font-size: 17px;
}
}

@media (max-width: 650px) {
  .question-box .question-text h3 ,
  .question-box .Faq-header h3 {

    font-size: 32px;
  }
  .question-box .question-content p {
    font-size: 16px;
  }
}

@media (max-width: 426px) {
  .question-box .question-text h3 ,.question-box .Faq-header h3 {

    font-size: 28px;
  }
  .question-box .question-content p {
    font-size: 15px;
  }
}

@media (max-width: 400px) {
     .question-box .question-text h3 ,
     .question-box .Faq-header h3 {

          font-size: 25px;
      }
      .question-box .question-content p {
        font-size: 14px;
      }
  }

  @media (max-width: 340px) {
    .question-box .question-text h3 ,
    .question-box .Faq-header h3 {
         font-size: 24px;
     }
     .question-box .question-content p {
       font-size: 13px;
     }
 }
`;
