import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section `

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


`