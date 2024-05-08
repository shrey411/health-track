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


`;
