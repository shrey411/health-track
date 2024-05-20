import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`

.HomeAttend-service .main-attend-Box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;
    background-color: ${Colors.BACKGROUND_COLOR11}
  }

  .HomeAttend-service .main-attend-Box .HomeAttend-header{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .HomeAttend-service .main-attend-Box .HomeAttend-header h3{
    font-size: 45px;
    font-family: outfit;
    font-weight: 600 ;
    width: 86%;
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
    align-items: baseline;
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

  .medical-attend-benefits{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .benefits-section{
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;  
      gap: 20px;
  }
 .benefits-container{
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     align-items: baseline;
     justify-content: center;
    }

    .benefits-container .benefit-item{
    display: flex;
    flex-direction: column;
    width: 86%;
    gap: 20px;
    }

    .benefit-item .benefit-content p{
        font-size: 20px;
        font-family: outfit;
    }


    .sub-attend-box .PhysiotherapyMode{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    
    .PhysiotherapyMode .PhysiotherapyMode-header{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 25px 0px;
      border-radius: 6px;
      background-color: ${Colors.BACKGROUND_COLOR10}
    }
    .PhysiotherapyMode-header .PhysiotherapyMode-title h3 {
      font-size: 36px;
      font-family: outfit;
      font-weight: 500;
    }
    .PhysiotherapyMode .PhysiotherapyMode-Details {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 10px;
    }

  @media(max-width: 1024px){
    .HomeAttend-service .main-attend-Box .HomeAttend-header h3 {
      font-size: 40px;
    }
    .HomeAttend-service .main-attend-Box .sub-attend-box {
      grid-template-columns: 63% 35%;
      gap: 20px;
    }
    .home-Appointment-box .HomeAttendent-form {
      width: 100%;
    }
    .services-info .info-question h2 {
      font-size: 36px;
  }
  .benefit-item .benefit-content p {
    font-size: 18px;
  }
  .PhysiotherapyMode-header .PhysiotherapyMode-title h3 {
    font-size: 32px;
  }
}
@media (max-width: 768px) {
  .HomeAttend-service .main-attend-Box .sub-attend-box {
    grid-template-columns: 100%; // Full-width for smaller screens
    gap: 20px;
  }

  .HomeAttend-service .main-attend-Box .HomeAttend-header h3 {
    font-size: 30px; // Reduce font size for smaller screens
  }

  .services-info .info-question h2 {
    font-size: 28px;
  }

  .services-info .info-question p {
    font-size: 18px;
  }

  .HomeAttendent-form .form-box input {
    height: 50px; // Adjust input height for smaller screens
  }

  .HomeAttendent-form .form-section .form-btn button {
    height: 50px; // Adjust button height
  }

  .home-Appointment-box .HomeAttendent-form {
    padding: 15px; // Adjust padding for smaller screens
  }

  .benefits-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .benefits-container .benefit-item{
    align-items: center;
    }

    .benefit-item .benefit-content p{
        text-align: center;
    }
    .BesicAttend h2{
        font-size: 24px;
    }
    
}

@media (max-width: 650px) {
  .services-info .info-question h2 {
    font-size: 26px;
  }

  .services-info .info-question p {
    font-size: 18px;
  }

  .PhysiotherapyMode .PhysiotherapyMode-Details {
      
    grid-template-columns: none;
  }
  

}

@media (max-width: 426px) {
 .HomeAttend-service .main-attend-Box .HomeAttend-header h3 {
        font-size: 26px;
      }
  .services-info .info-question h2 {
    font-size: 22px;
  }

  .services-info .info-question p {
    font-size: 17px;
  }
  .HomeAttendent-form .form-header h3{
    font-size: 25px;
  }
  .benefit-item .benefit-content p {
    font-size: 15px;
  }

}

@media (max-width: 400px) {
  .HomeAttend-service .main-attend-Box .HomeAttend-header h3 {
         font-size: 24px;
       }
   .services-info .info-question h2 {
     font-size: 20px;
   }
 
   .services-info .info-question p {
     font-size: 16px;
   }
   .HomeAttendent-form .form-header h3{
     font-size: 24px;
   }
   .benefits-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .benefit-item .benefit-content p {
    font-size: 14px;
  }
  .BesicAttend h2{
    font-size: 22px;
}

 
 }
 @media (max-width: 330px) {
  .HomeAttend-service .main-attend-Box .HomeAttend-header h3 {
         font-size: 18px;
         width: 89%;
  }
   .services-info .info-question h2 {
     font-size: 20px;
   }
 
   .services-info .info-question p {
     font-size: 16px;
   }
   .HomeAttendent-form .form-header h3{
     font-size: 22px;
   }
   .BesicAttend h2{
    font-size: 20px;
   }
 
 }
 

`