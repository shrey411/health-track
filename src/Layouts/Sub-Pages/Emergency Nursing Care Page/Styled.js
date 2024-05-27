import styled from "styled-components";
import Colors from "../../../assets/Colors";

export const Wrapper = styled.section`

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

  // card-selection

  .care-selection-container{
    background-color: rgba(249, 249, 249, 1);
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .care-selection-container .main-careSelection{
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .main-careSelection .selectedCare-section{
    display: grid;
    grid-template-columns: 65% 35%;
  }
  .care-selection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 45px;
    margin-bottom: 20px;
    position: sticky;
    margin-top: -55px;
}

.care-selection button {
    border-radius: 10px;
    border: none;
    background: ${Colors.WHITE};
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-around;
}

.currentCarer-btn.active{
  background: ${Colors.BACKGROUND_COLOR1};
  color: ${Colors.WHITE}
}

.care-selection img {
    width: 100px;
    height: 100px;
}

.care-selection p {
    font-family: outfit;
    font-size: 22px;
    font-weight: 400;
  width: 50%;
  text-align : left;
}

.care-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
}



.care-content p {
  font-family: outfit;
  font-size: 28px;
  font-weight: 300;
}

.care-content ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
}

.care-content li {
    margin: 5px 0;
}
.home-Appointment-box{
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





`;