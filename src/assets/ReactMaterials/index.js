import { IoIosArrowBack, IoIosArrowForward } from '../Icons/index'
import styled from "styled-components";
import Colors from "../Colors";

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
                className="NextButton"
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
    background-color: ${Colors.BACKGROUND_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;
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
    background-color: ${Colors.BACKGROUND_COLOR1};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: ${Colors.WHITE};
    border: none;
  }

`