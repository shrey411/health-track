import styled from "styled-components";

export const Wrapper = styled.section`


width: 100%;

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

.Certificate-container .certificate-1 h5,
.Certificate-container .certificate-2 h5,
.Certificate-container .certificate-3 h5 {
  text-align: center;
  
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
  
  .NursingSkill-certificate .Certificate-container {
    gap: 15px;
  }
  .Certificate-container .certificate-1 img,  .Certificate-container .certificate-2 img,  .Certificate-container .certificate-3 img {
    width: 60%;
  }
  .Certificate-container .certificate-1 h5,
  .Certificate-container .certificate-2 h5,
  .Certificate-container .certificate-3 h5{
    font-size: 16px;
  }
}

@media (max-width: 650px) {
  
  .NursingSkill-certificate .Certificate-container {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }
  .Certificate-container .certificate-3 {
    grid-column: span 2;
  }
  .Certificate-container .certificate-3 img {
    width: 35%;
  }
}

@media (max-width: 426px) {
  
  .Certificate-container .certificate-1 img,  .Certificate-container .certificate-2 img,  .Certificate-container .certificate-3 img {
    width: 70%;
  }
  .Certificate-container .certificate-3 img {
    width: 35%;
  }
}

`