// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import styled from 'styled-components';
// import {IoIosArrowForward} from "../../assets/Icons/index"

// const ServiceCard = ({ title, price, features, buttonLabel }) => {
//     return (

//         <CardMedia className='PhysioCard' variant="outlined" sx={{  marginBottom: 2,borderRadius: "10px",        }}>
//             <CardContent className='PhysioCardContent'>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography variant="h5" component="div" >
//                         {title} &nbsp; <IoIosArrowForward />
//                     </Typography>
//                     <Typography variant="h5" component="div" className='Mode-price' color="orange">
//                         ₹ {price}/session
//                     </Typography>
//                 </Box>
//                 <Typography variant="body" component="div" className='Mode-header'>
//                     Online sessions with our specialist for quick
//                     recovery at home.
//                 </Typography>
//                 <List>
//                     {features.map((feature, index) => (
//                         <ListItem className='ListItems' key={index}>
//                             <ListItemIcon>
//                                 <CheckCircleIcon color="primary" />
//                             </ListItemIcon>
//                             <ListItemText className="ListItem-Text" primary={feature} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </CardContent>
//             <Box sx={{ width: "85%"}}>
//                 <Button variant="outlined" fullWidth>
//                     {buttonLabel}
//                 </Button>
//             </Box>
//         </CardMedia>
//     );
// };

// export default ServiceCard;


// export const CardMedia = styled(Card)`
// display: flex;
// flex-direction: column;
// align-items: center;
// // justify-content: space-around;
// box-shadow: 0px 6px 10px 0px rgba(32, 32, 32, 0.1);
// height: 520px;
// Width: 95%;


// .PhysioCardContent{
//     display: flex;
//    flex-direction: column; 
//    gap: 20px;
// }

// .Mode-title {
//     font-family: outfit;
//     font-size: 26px;
//     font-weight: 500;
// }
// .Mode-header{
//     font-family: outfit;
//     font-size: 20px;
//     font-weight: 400;
// }



// .ListItem-Text span {
//     font-family: outfit;
//     font-size: 17px;
//     font-weight: 400;
// }


// @media(max-width: 1024px){

//     height: 670px;

// .ListItems{
//     padding-left: 0px;
//     padding-right: 0px;
// }
// .Mode-price{
//     font-size: 1.1rem;
//    }

//    .ListItems div:first-child {
//     min-width: 40px;
//    }
// }


// @media(max-width: 768px){
//     height: 600px;

// }

// @media(max-width: 650px){
//     height: 500px;

// }

// @media(max-width: 400px){
//     height: 600px;

// }
// @media(max-width: 330px){
//     height: 650px;

// }
// `



import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, List, ListItem, ListItemText, ListItemIcon, Modal, TextField, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';
import { CiCalendar, IoIosArrowForward } from "../../assets/Icons/index";
import CloseIcon from '@mui/icons-material/Close';
import { NestedModelImg1, NestedModelImg2, NestedModelImg3, PhysioModel3Img, PhysioModelBoxImg1 } from '../../assets/Images';
import Colors from '../../assets/Colors';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for the DatePicker

const ServiceCard = ({ title, price, features, buttonLabel }) => {
    const [open, setOpen] = useState(false);
    const [nestedOpen, setNestedOpen] = useState(false);

    const [thirdModalOpen, setThirdModalOpen] = useState(false); // State for third modal
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null); // State to store the selected time
    const [userDetails, setUserDetails] = useState({
        name: '',
        mobile: '',
        address: ''
    });

    const handleOpen = () => {
        generateDates();
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleNestedOpen = () => {
        // if(  ! userDetails.name === "" ||! userDetails.mobile  === "" || !userDetails.address  === ""  ){
        setOpen(false);
        setNestedOpen(true);
        // }
        // else{
        //     alert("Please Full-fill the details")
        // }
    };
    const handleConfirmationOpen = () => {
        setNestedOpen(false);
        setThirdModalOpen(true);
    };

    const handleConfirmationClose = () => setThirdModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };


    const handleContinue = () => {
        handleNestedOpen();
    };





    const handleNestedClose = () => setNestedOpen(false);
    // Function to generate dates dynamically starting from today
    const generateDates = () => {
        const today = new Date();
        const dateOptions = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
            const dayName = date.toLocaleDateString('en-GB', { weekday: 'long' });
            if (i === 0) {
                dateOptions.push({ date: formattedDate, day: 'Today' });
            } else if (i === 1) {
                dateOptions.push({ date: formattedDate, day: 'Tomorrow' });
            } else {
                dateOptions.push({ date: formattedDate, day: dayName });
            }
        }
        setDates(dateOptions);
    };
    console.log(dates)


    return (
        <>
            <CardMedia className='PhysioCard' variant="outlined" sx={{ marginBottom: 2, borderRadius: "10px" }}>
                <CardContent className='PhysioCardContent'>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" component="div">
                            {title} &nbsp; <IoIosArrowForward />
                        </Typography>
                        <Typography variant="h5" component="div" className='Mode-price' color="orange">
                            ₹ {price}/session
                        </Typography>
                    </Box>
                    <Typography variant="body" component="div" className='Mode-header'>
                        Online sessions with our specialist for quick recovery at home.
                    </Typography>
                    <List>
                        {features.map((feature, index) => (
                            <ListItem className='ListItems' key={index}>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText className="ListItem-Text" primary={feature} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <Box sx={{ width: "85%" }}>
                    <Button variant="outlined" fullWidth onClick={handleOpen}>
                        {buttonLabel}
                    </Button>
                </Box>
            </CardMedia>

            <Modal open={open} onClose={handleClose}>
                <ModalBox>
                    <StyledCard className="modal-card">
                        <IconButton className="close-icon" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <CardMedia
                            component="img"
                            sx={{ width: "100%", height: "180px" }}
                            src={PhysioModelBoxImg1}
                            alt="Hospital Image"
                        />
                        <StyledCardContent>
                            <Box className="Content-header">
                                <Typography variant="h6" >
                                    Book an online consult with our physiotherapist for only
                                </Typography>
                                <span> ₹249/-</span>
                            </Box>
                            <Box>
                                <StyledTextField fullWidth label="Patient Name" margin="normal" name="name" onChange={handleInputChange} />
                                <StyledTextField fullWidth label="Mobile Number" margin="normal" name="mobile" onChange={handleInputChange} />
                                <StyledTextField fullWidth label="Address" margin="normal" name="address" onChange={handleInputChange} />
                                <StyledButton variant="contained" color="primary" fullWidth onClick={handleContinue}>Continue</StyledButton>
                            </Box>
                            <Typography variant="body2" align="center" mt={2}>
                                By Submitting the form, you Agree to TTHC
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </ModalBox>
            </Modal>

            <Modal open={nestedOpen} onClose={handleNestedClose}>
                <ModalBox>
                    <StyledCard1 className="nested-modal-card">
                        <Box className="nested-modal-header">
                            <Typography variant="h6" align="center">
                                Choose Slot
                            </Typography>
                            <IconButton className="close-icon" onClick={handleNestedClose}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <StyledCardContent1>
                            <Box className="slot-section">
                                <Box className="date-Container">
                                    <Typography variant="subtitle1" gutterBottom>
                                        Select a date
                                    </Typography>
                                    <ButtonGroupContainer>
                                        <ButtonGroupContainer>
                                            {dates.map((dateObj, index) => (
                                                <Button key={index}
                                                    variant="outlined"
                                                    className='currentDate-container' onClick={() => setSelectedDate(dateObj)}>
                                                    <span className='dateMonth'>{dateObj.date}</span>
                                                    <span className='days'>{dateObj.day}</span>
                                                </Button>
                                            ))}
                                            <Button variant="outlined" onClick={() => setDatePickerOpen(true)}>
                                                <CiCalendar size={25} />
                                                Pick a date
                                            </Button>
                                            {datePickerOpen && (
                                                <ReactDatePicker
                                                    className='react-datepicker'
                                                    selected={selectedDate}
                                                    onChange={date => {
                                                        setSelectedDate(date);
                                                        setDatePickerOpen(false);
                                                    }}
                                                    inline
                                                    onClickOutside={() => setDatePickerOpen(false)}
                                                />
                                            )}
                                        </ButtonGroupContainer>
                                    </ButtonGroupContainer>
                                </Box>
                                <Box className="time-Container">
                                    <Typography variant="subtitle1" gutterBottom >
                                        Select a time
                                    </Typography>
                                    <Typography variant="body" gutterBottom >
                                        Session duration will be between 30-45 mins
                                    </Typography>
                                    <ButtonGroupContainer>
                                        {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map((time, index) => (
                                            <Button key={index} variant="outlined" onClick={() => setSelectedTime(time)}>{time}</Button>
                                        ))}
                                    </ButtonGroupContainer>
                                </Box>
                                <Box className="service-image">
                                    <Box className="service1">
                                        <img src={NestedModelImg1} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Patient safety and quality                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg2} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Easy and quick refunds
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg3} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Hassle free rescheduling
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "90%" }}>
                                    <StyledButton variant="contained" color="primary" fullWidth onClick={handleConfirmationOpen}>Continue</StyledButton>
                                </Box>
                            </Box>
                        </StyledCardContent1>
                    </StyledCard1>
                </ModalBox>
            </Modal>


            <Modal open={thirdModalOpen} onClose={handleConfirmationClose}>
                <ModalBox>
                    <StyledCard1 className="third-modal-card">
                        <Box className="third-modal-header">
                            <Typography variant="h6" align="center">
                                Confirm Details
                            </Typography>
                            <IconButton className="close-icon" onClick={handleConfirmationClose}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <StyledCardContent1>
                            <Box>
                                <Box>
                                    <Box className="slot-section">
                                        <Typography variant="subtitle1" gutterBottom>
                                            Online session with
                                        </Typography>
                                        <Box>
                                            <CardMedia component="img" src={PhysioModel3Img} />
                                            <Box>
                                                <Typography variant="body2">Best available physiotherapist</Typography>
                                                <Typography variant="body2">Based on patient’s care needs, we’ll assign the best physiotherapist.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2">30Apr, Tue - 11:00 AM</Typography>
                                    </Box>
                                    <Box className="service-image">
                                    <Box className="service1">
                                        <img src={NestedModelImg1} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Patient safety and quality                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg2} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Easy and quick refunds
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg3} alt='' />
                                        <Typography variant="body" gutterBottom>
                                            Hassle free rescheduling
                                        </Typography>
                                    </Box>
                                </Box>
                                </Box>
                                <Box className="details-section">
                                    <Box>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Booking for
                                        </Typography>
                                        <Box>
                                            <Typography variant="body2">Name: </Typography>
                                            <Typography variant="body2">{userDetails.name} </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">Mobile: </Typography>
                                            <Typography variant="body2">{userDetails.mobile} </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">City: </Typography>
                                            <Typography variant="body2">{userDetails.address} </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Payment summary                                        </Typography>
                                        <Box>
                                            <Typography variant="body2">Session fee </Typography>
                                            <Typography variant="body2">₹ 249</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">Tax (GST 0%)</Typography>
                                            <Typography variant="body2">₹ 0</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <StyledButton variant="contained" color="primary" fullWidth>Confirm Booking</StyledButton>
                        </StyledCardContent1>
                    </StyledCard1>
                </ModalBox>
            </Modal>
        </>
    );
};

export default ServiceCard;

export const CardMedia = styled(Card)`
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 6px 10px 0px rgba(32, 32, 32, 0.1);
height: 520px;
Width: 97%;

.PhysioCardContent {
    display: flex;
    flex-direction: column; 
    gap: 20px;
}

.Mode-title {
    font-family: outfit;
    font-size: 26px;
    font-weight: 500;
}
.Mode-header {
    font-family: outfit;
    font-size: 20px;
    font-weight: 400;
}

.ListItem-Text span {
    font-family: outfit;
    font-size: 17px;
    font-weight: 400;
}

@media (max-width: 1024px) {
    height: 670px;

    .ListItems {
        padding-left: 0px;
        padding-right: 0px;
    }
    .Mode-price {
        font-size: 1.1rem;
    }

    .ListItems div:first-child {
        min-width: 40px;
    }
}

@media (max-width: 768px) {
    height: 600px;
}

@media (max-width: 650px) {
    height: 500px;
}

@media (max-width: 400px) {
    height: 600px;
}

@media (max-width: 330px) {
    height: 650px;
}
`;

const ModalBox = styled(Box)`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
outline: 0;
`;

const StyledCard = styled(Card)`
width: 90%;
max-width: 470px;
position: relative;
max-height: 680px;

.modal-card {
    width: 90%;
    max-width: 400px;
    overflow-y: auto;
    position: relative;
}

.close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
}

`;


const StyledCardContent = styled(CardContent)`
padding: 16px 27px !important;
background-color: ${Colors.BACKGROUND_COLOR9};

.Content-header{
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

.Content-header h6,
.Content-header span{
    font-family: outfit;
    font-size: 30px;
    font-weight: 500;
}
.Content-header span{
    color : ${Colors.BACKGROUND_COLOR1}
}
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    background-color: ${Colors.WHITE}
  }

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: 500;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

 

  .MuiOutlinedInput-input {
    font-size: 14px;
    padding: 16px 14px;
  }
  

`;

const StyledButton = styled(Button)`

margin: 16px 0px 8px 0px ! important;
height: 50px;
`;

const ButtonGroupContainer = styled(Box)`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 8px;

.react-datepicker{
    position: absolute;
    left: 56%;
    top: 25%;
    z-index: 1;
}

.currentDate-container{
    display: felx;
    flex-direction: column;
}

.currentDate-container .dateMonth{
    font-size: 18px;
    font-weight : 500;
    font-family: outfit;
}

.currentDate-container .days{
    font-size: 11px;
    font-weight : 400;
    font-family: outfit;
}


  button.MuiButton-outlinedPrimary {
    color: ${Colors.FONT_COLOR1};
    background-color: ${Colors.WHITE};
    border-color: lightgray;
    height: 60px;
    width: 130px;
    font-size: 18px;
    font-weight : 500;
    font-family: outfit;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;


const StyledCard1 = styled(Card)`
 width: 50%;


.nested-modal-header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background: rgba(216, 231, 255, 1);
}

.nested-modal-header h6{
    width: 100%;
}


`;


const StyledCardContent1 = styled(CardContent)`
.slot-section{
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: center;
}
.date-Container , 
.time-Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    // gap: 10px;
    padding: 10px 16px;
    background-color: rgba(240, 240, 240, 1);
    border-radius: 10px;
}

.date-Container h6,
.time-Container h6{
    font-size: 25px;
    font-family: outfit;
    font-weight: 500
}

.time-Container span{
    font-size: 18px;
    font-family: outfit;
    font-weight: 300;
}


.service-image {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
}

.service1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 66%;
}

.service1 span{
    font-size: 15px;
    font-family: outfit;
    font-weight: 400;
    text-align: center;
   color: rgba(119, 119, 119, 1);

}
`

//  const StyledImage = styled('img')`
// width: 100%;
// border-radius: 8px;
// `;
