import styled from 'styled-components';
import Colors from '../../../assets/Colors';

export const Wrapper = styled.section`

// MedicalAttend-container

  .container-fluid.ICUCare-section {
    padding: 0px;
  }
  .ICUCare-img-box img {
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


// ICUCareService

.IcuCareService .main-ICUNursing{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.BACKGROUND_COLOR11}
  }

  .icuCare-details{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  
  
  

  .icuCare-details .NursingService-slider ,
  .icuCare-details .MedicalStaff-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:baseline;
    gap: 30px;
  }



  .NursingService-header h3,
  .medicalstaff-header h3,
  .Faq-box .Faq-header h3 ,
  .question-box .Faq-que h3{
    font-size: 40px;
    font-family: outfit;
    font-weight: 500;
  } 

  .ICUCare-Faq-section{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .ICUCare-Faq-section .question-box{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .question-box .Faq-ans p{
    font-size: 24px;
    font-family: outfit;
    font-weight: 300;
  } 

  .icuCare-details .Faq-box{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: baseline;
  }

  @media (max-width: 1024px) {
    .question-box .Faq-ans p{
      font-size: 22px;
    } 
  }

  @media (max-width: 768px) {
    .NursingService-header h3 ,
    .medicalstaff-header h3 ,
    .Faq-box .Faq-header h3,
    .question-box .Faq-que h3{
      font-size: 32px;
    }
    .question-box .Faq-ans p{
      font-size: 20px;
    }
  }
  
  @media (max-width: 650px) {
    .NursingService-header h3 ,
    .medicalstaff-header h3 ,  .Faq-box .Faq-header h3,
    .question-box .Faq-que h3{

      font-size: 32px;
    }
    .question-box .Faq-ans p{
      font-size: 20px;
    }
  }
  
  @media (max-width: 426px) {
    .NursingService-header h3 ,  .medicalstaff-header h3 ,
    .Faq-box .Faq-header h3,
    .question-box .Faq-que h3{


      font-size: 28px;
    }
    .question-box .Faq-ans p{
      font-size: 18px;
    }
  }
  
  @media (max-width: 400px) {
    .NursingService-header h3 ,  .medicalstaff-header h3 ,
    .Faq-box .Faq-header h3,  .question-box .Faq-que h3{
      font-size: 25px;
    }
    .question-box .Faq-ans p{
      font-size: 16px;
    }
  
  }
  
    @media (max-width: 340px) {
      .NursingService-header h3 ,  
      .medicalstaff-header h3,
      .Faq-box .Faq-header h3,  .question-box .Faq-que h3{
        font-size: 24px;
      }
      
   }





`