import styled from "styled-components";
import { ClientInfoTemp, HomePageBG } from "../../assets/Images";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`

.container-fluid.home-section{
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}
.main-home-section{
    background-image: url(${HomePageBG});
}
.home-box .BG-image img{
    width: 100%;
}
.home-container{
    display: grid;
    grid-template-columns: 50% 50%;

}
.Health-Service-Form{
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-section.container{
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 16px;
}
.header-images{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.header-images .header-part1{
    display: flex;
}

.header-img4{
    display: flex;
    flex-direction: column;
}
.header-images .header-img1 .custom-img1{
    width: 100%;
    height: 77%
    // margin-top: 15%;
}
.header-images .header-img4 .custom-img2{
   width:76%;
   margin-left: 13%;
}
.header-img1{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
}
.header-images .header-img3 img{
    width:100%;
}
.header-img2 {
    width: 20%;
    position: absolute;
    right: 8%;
    top: 70%;
}
.header-img2 .custom-img4{
    width: 100%;
} 
.form-group{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}
.form-box1{
    width: 549px;
    height: 70px;
}

.form-box2{
    display: flex;
    justify-content: space-between;
    width: 549px;
    height: 70px;
}
.form-box3{
    width: 549px;
    height: 60px;
}
.location-box,.country-box{
    width: 47%;
}
.form-box2 .location-box input,
.form-box2 .country-box input{
    width: 100%;
    height: 100%;
    border-radius: 68.67px;
    padding: 30px;
    border-color: rgba(200, 200, 200, 1);
}

.form-box1 input,
.form-box3 button{
   width: 100%;
    height: 100%;
    border-radius: 68.67px;
    padding: 30px;
    
}
.form-box3 button{
    background: rgba(255, 60, 72, 1);
    border: none;
}

.box1-head h4{
    font-size: 26px;
    font-family: outfit;
}
.box2-head h2{
    font-size: 3.5rem;
    font-family: outfit;
    font-weight: 700;
}



// Catagories-section


.catagories-section .main-catagories{
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-catagories .catagories-container{
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.catagories-container .header-box span{
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1}
}

.catagories-service .catagories-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.catagories-service .catagories-info h3{
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
}

.catagories-service .catagories-info p{
    font-weight: 300;
    font-family: outfit;
}


.slick-dots ul li button:before {
    font-size: 24px ! important;
    color: gray;
    
}


.slick-dots ul li {
    margin: 0px 10px;
}

.slick-dots ul li.slick-active button:before {
    color: red; /* Change the color of the active dot here */
  }



  // Nursing-service

  .nursing-section{
    width: 100%;
  }
  .nursing-section .main-nursing{
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-nursing .nursing-container{
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}


.nursing-container .header-box span{
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1}
}

.nursing-service .nursing-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.nursing-service .nursing-info h3{
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
}

.nursing-service .nursing-info p{
    font-weight: 300;
    font-family: outfit;
}

.nursing-slider{
    width: 100%;
}

.nursing-moreInfo .more-info-btn{
    background-color: ${Colors.BLACK};
    color: ${Colors.WHITE};
    width: 160px;
    height: 40px;
}



//  clients-template

.clients-template{
    width: 100%;
}
.clients-template .client-container{
    // background-image: url(${ClientInfoTemp});
    // height: 200px;
}

.clients-template .client-container .client-details{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${ClientInfoTemp});
    height: 200px;

}

.client-details .info-box1{
    width: 24%;
} 

.client-details .info-box1 p{
    font-size:22px;
    font-weight: 400;
    font-family: outfit;
    color: ${Colors.WHITE};
} 

.client-details .info-box2, .info-box3 , .info-box4{
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16%;

}
.info-box4 h4,
.info-box2 h4,
.info-box3 h4{
    font-size: 48px;
    color: ${Colors.WHITE}
}

.info-box4 h5,
.info-box2 h5,
.info-box3 h5{
    width: 65%;
    font-size: 21px;
    color: ${Colors.WHITE}

}


// Hospitals section

.hospitals-section{
    width: 100%;
  }
  .hospitals-section .main-hospitals{
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-hospitals .hospitals-container{
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}


.hospitals-container .header-box span{
    font-size: 18px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR1}
}

.hospitals-service .hospitals-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.hospitals-service .hospitals-info h3{
    font-size: 36px;
    font-family: outfit;
    color: ${Colors.BACKGROUND_COLOR2};
}

.hospitals-service .hospitals-info p{
    font-weight: 300;
    font-family: outfit;
}

`