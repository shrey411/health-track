import styled from 'styled-components';
import Colors from '../../../assets/Colors';

export const Wrapper = styled.section`

// MedicalAttend-container

  .container-fluid.medicalAttend-section {
    padding: 0px;
  }
  .medicalAttend-img-box img {
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


// medicalAttendService

.MedicalAttendService .main-MedicalNursing{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.BACKGROUND_COLOR11}
  }

  .medicalAtend-details{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  
  
  

  .medicalAtend-details .NursingService-slider ,
  .medicalAtend-details .MedicalStaff-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:baseline;
    gap: 30px;
  }

  .NursingService-header h3,
  .medicalstaff-header h3,
  .question-box .Faq-header h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  } 

  .medicalAtend-details .question-box{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: baseline;
  }

  @media (max-width: 768px) {
    .NursingService-header h3 ,
    .medicalstaff-header h3 ,
    .question-box .Faq-header h3{

      font-size: 32px;
    }
  }
  
  @media (max-width: 650px) {
    .NursingService-header h3 ,
    .medicalstaff-header h3 ,  .question-box .Faq-header h3{

      font-size: 32px;
    }
  }
  
  @media (max-width: 426px) {
    .NursingService-header h3 ,  .medicalstaff-header h3 ,
    .question-box .Faq-header h3{

      font-size: 28px;
    }
  }
  
  @media (max-width: 400px) {
    .NursingService-header h3 ,  .medicalstaff-header h3 ,
    .question-box .Faq-header h3{

      font-size: 25px;
    }
    
  
  }
  
    @media (max-width: 340px) {
      .NursingService-header h3 ,  
      .medicalstaff-header h3,
      .question-box .Faq-header h3{

        font-size: 24px;
      }
      
   }





`