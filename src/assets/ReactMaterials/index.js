import { IoIosArrowBack, IoIosArrowForward } from '../Icons/index'
import styled from "styled-components";
import Colors from "../Colors";

export const settings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  appendDots: dots => (
    <div
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024, // Adjust this breakpoint to suit your needs
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },  
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};


export const settings3 = {
  dots: true,
  infinite: true,
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: dots => (
    <div
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  
};


// const CustomPrevButton = ({ onClick }) => (
//   <button className="custom-prev-button" onClick={onClick}>
//     <MdArrowBackIos className="arro-icon" />
//   </button>
// );

// const CustomNextButton = ({ onClick }) => (
//   <button className="custom-next-button" onClick={onClick}>
//     <MdArrowForwardIos className="arro-icon" />
//   </button>
// );


// export const settings1 = {
//         dots: false,
//         infinite: true,
//         arrows: true, 
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         nextArrow: <CustomNextButton />,
//         prevArrow: <CustomPrevButton />
// };

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NextArrow>
      <button
        className="NextButton NextBtn"
        onClick={onClick}
      >
        <IoIosArrowForward /> {/* Icon size and color */}
      </button>
    </NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <PrevArrow>
      <button
        className="PrevButton"
        onClick={onClick}
      >
        <IoIosArrowBack /> {/* Icon size and color */}
      </button>
    </PrevArrow>
  );
}

export const settings1 = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // Adjust this breakpoint to suit your needs
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const CustomDot = () => {

  // Style the dot to be square
  const dotStyle = {
    width: '15px',
    height: '15px',
    margin: '0 10px',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  };

  return <span style={dotStyle}
  ></span>;

};

export const settings2 = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  customPaging: CustomDot,
  
};

function Slider2NextArrow(props) {
  const { onClick } = props;
  return (
    <Slider2NextedArrow>
      <button
        className="NextButton NextBtn"
        onClick={onClick}
      >
        <IoIosArrowForward /> {/* Icon size and color */}
      </button>
    </Slider2NextedArrow>
  );
}

function Slider2PrevArrow(props) {
  const { onClick } = props;
  return (
    <Slider2PreviousArrow>
      <button
        className="PrevButton"
        onClick={onClick}
      >
        <IoIosArrowBack /> {/* Icon size and color */}
      </button>
    </Slider2PreviousArrow>
  );
}

export const settings4 = {
  dots: false,
  infinite: true,
  // autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Slider2NextArrow />,
  prevArrow: <Slider2PrevArrow />,
  responsive: [
    {
      breakpoint: 1100, // Adjust this breakpoint to suit your needs
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024, // Adjust this breakpoint to suit your needs
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};




export const PrevArrow = styled.div`

  .PrevButton{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    background-color: ${Colors.FONT_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;

    .NextBtn{
      top: 30%;
    }

  }

  @media (max-width: 1415px){
    .PrevButton{
      top: 46%;
  }
}
  @media (max-width: 1145px){
    .PrevButton{
       top: 44%;
    }
  }
  @media (max-width: 1025px){
    .PrevButton{
       top: 44%;
    }
  }
  @media (max-width: 943px){
    .PrevButton{
       top: 46%;
    }
  }

  @media (max-width: 765px){
    .PrevButton{
       top: 46%;
    }
  }
  
  @media (max-width: 665px){
    .PrevButton{
       top: 42%;
    }
  }
  


`

export const NextArrow = styled.div`

  .NextButton
  {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    background-color: ${Colors.FONT_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;
  }


  @media (max-width: 1415px){
    .NextButton{
      top: 46%;
  }

}

@media (max-width: 1145px){
  .NextButton{
     top: 44%;
  }
}
@media (max-width: 1025px){
  .NextButton{
     top: 44%;
  }
}
@media (max-width: 943px){
  .NextButton{
     top: 46%;
  }
}
@media (max-width: 765px){
  .NextButton{
     top: 46%;
  }
}

@media (max-width: 665px){
  .NextButton{
     top: 42%;
  }
}

`



export const Slider2PreviousArrow = styled.div`

  .PrevButton{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 38%;
    left: 2px;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    background-color: ${Colors.FONT_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;

    .NextBtn{
      top: 30%;
    }

  }

  @media (max-width: 1415px){
    .PrevButton{
      top: 38%;
  }
}
  @media (max-width: 1300px){
    .PrevButton{
      top: 35%;
  }
}
  @media (max-width: 1145px){
    .PrevButton{
       top: 32%;
    }
  }
  @media (max-width: 1100px){
    .PrevButton{
       top: 36%;
    }
  }
  @media (max-width: 1024px){
    .PrevButton{
       top: 36%;
    }
  }
  @media (max-width: 943px){
    .PrevButton{
       top: 35%;
    }
  }

  @media (max-width: 769px){
    .PrevButton{
       top: 40%;
    }
  }
  
  @media (max-width: 675px){
    .PrevButton{
       top: 36%;
    }
  }
  @media (max-width: 477px){
    .PrevButton{
       top: 44%;
    }
  }
  @media (max-width: 426px){
    .PrevButton{
       top: 42%;
    }
  }
  @media (max-width: 400px){
    .PrevButton{
       top: 38%;
    }
  }
  @media (max-width: 320px){
    .PrevButton{
       top: 33%;
    }
  }

`

export const Slider2NextedArrow = styled.div`

  .NextButton
  {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 38%;
    right: -2px;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    background-color: ${Colors.FONT_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;
  }


  @media (max-width: 1415px){
    .NextButton{
      top: 38%;
  }

}
@media (max-width: 1300px){
  .NextButton{
    top: 35%;
}
}

@media (max-width: 1145px){
  .NextButton{
     top: 32%;
  }
}

@media (max-width: 1100px){
  .NextButton{
     top: 36%;
  }
}
@media (max-width: 1024px){
  .NextButton{
     top: 36%;
  }
}
@media (max-width: 943px){
  .NextButton{
     top: 35%;
  }
}
@media (max-width: 769px){
  .NextButton{
     top: 40%;
  }
}

@media (max-width: 676px){
  .NextButton{
     top: 36%;
  }
}
@media (max-width: 477px){
  .NextButton{
     top: 44%;
  }
}
@media (max-width: 426px){
  .NextButton{
     top: 42%;
  }
}
@media (max-width: 400px){
  .NextButton{
     top: 38%;
  }
}
@media (max-width: 320px){
  .NextButton{
    top: 33%;
  }
}

`