import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`


.Faq-section{
    width: 100%;
  }

.Faq-section .main-Faq .Faq-box{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.BACKGROUND_COLOR7};
  }

  .main-Faq .Faq-container{
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .Faq-container .Faq-left-part{
    width: 50%;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 20px;
 }

 .Faq-left-part .header-box h5{ 
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1};
}
.Faq-left-part .question-header h3{ 
    font-size: 42px;
    font-family: outfit;
    font-weight: 500;
    
 }
  .question-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

 .Faq-container .Faq-right-part{
    width: 40%
 }

 .Faq-container .Faq-right-part img{
    width: 100%;
 }

`