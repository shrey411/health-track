

import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Modal,
    TextField,
    IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import { CiCalendar, FaRegClock, IoIosArrowForward, SlPencil } from "../../assets/Icons/index";
import CloseIcon from "@mui/icons-material/Close";
import {
    NestedModelImg1,
    NestedModelImg2,
    NestedModelImg3,
    PhysioModel3Img,
    PhysioModelBoxImg1,
} from "../../assets/Images";
import Colors from "../../assets/Colors";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the DatePicker

const ServiceCard = ({ title, price, features, buttonLabel }) => {
    const [open, setOpen] = useState(false);
    const [nestedOpen, setNestedOpen] = useState(false);

    const [thirdModalOpen, setThirdModalOpen] = useState(false); // State for third modal
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null); // State to store the selected time
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        mobile: "",
        address: "",
    });

    const handleOpen = () => {
        generateDates();
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleNestedOpen = () => {
        if (
            userDetails.name !== "" ||
            userDetails.mobile !== "" ||
            userDetails.address !== ""
        ) {
            setOpen(false);
            setNestedOpen(true);
        } else {
            alert("Please Full-fill the details");
        }
    };
    const handleConfirmationOpen = () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time.");
        } else {
            setNestedOpen(false);
            setThirdModalOpen(true);
        }
    };

    const handleConfirmationClose = () => setThirdModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const validateUserDetails = () => {
        const nameRegex = /^[a-zA-Z\s]*$/;
        const mobileRegex = /^\d{10}$/;

        if (!nameRegex.test(userDetails.name) || (userDetails.name.length) > 30 ) {
            return "Name should contain only characters and spaces, and be at most 0 characters long.";
        }

        if (!mobileRegex.test(userDetails.mobile)) {
            return "Mobile number should contain only 10 digits.";
        }

        if (!userDetails.name || !userDetails.mobile || !userDetails.address) {
            return "Please fill in all the details.";
        }

        return null;
    };

    const handleContinue = () => {
        setHasSubmitted(true);
        const errorMessage = validateUserDetails();
        if (errorMessage) {
            alert(errorMessage);
        } else {
            handleNestedOpen();
        }
    };
    const handleChangeSlot = () => {
        setThirdModalOpen(false);
        setNestedOpen(true);
    };


    const handleNestedClose = () => setNestedOpen(false);
    // Function to generate dates dynamically starting from today
    const generateDates = () => {
        const today = new Date();
        const dateOptions = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const formattedDate = date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
            });
            const dayName = date.toLocaleDateString("en-GB", { weekday: "long" });
            if (i === 0) {
                dateOptions.push({ date: formattedDate, day: "Today" });
            } else if (i === 1) {
                dateOptions.push({ date: formattedDate, day: "Tomorrow" });
            } else {
                dateOptions.push({ date: formattedDate, day: dayName });
            }
        }
        setDates(dateOptions);
    };
    const handleDateChange = (date) => {
        if (date instanceof Date && !isNaN(date)) {
            setSelectedDate({
                date: date.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
                day: date.toLocaleDateString("en-GB", { weekday: "long" }),
            });
            setDatePickerOpen(false);
        }
    };
    console.log(dates, selectedTime, selectedDate,hasSubmitted);
    return (
        <>
            <CardMedia
                className="PhysioCard"
                variant="outlined"
                sx={{ marginBottom: 2, borderRadius: "10px" }}
            >
                <CardContent className="PhysioCardContent">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h5" component="div">
                            {title} &nbsp; <IoIosArrowForward />
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                            className="Mode-price"
                            color="orange"
                        >
                            ₹ {price}/session
                        </Typography>
                    </Box>
                    <Typography variant="body" component="div" className="Mode-header">
                        Online sessions with our specialist for quick recovery at home.
                    </Typography>
                    <List>
                        {features.map((feature, index) => (
                            <ListItem className="ListItems" key={index}>
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
                                <Typography variant="h6">
                                    Book an online consult with our physiotherapist for only
                                </Typography>
                                <span> ₹249/-</span>
                            </Box>
                            <Box>
                                <StyledTextField
                                    fullWidth
                                    label="Patient Name"
                                    margin="normal"
                                    name="name"
                                    onChange={handleInputChange}
                                />
                                <StyledTextField
                                    fullWidth
                                    label="Mobile Number"
                                    margin="normal"
                                    name="mobile"
                                    onChange={handleInputChange}
                                />
                                <StyledTextField
                                    fullWidth
                                    label="Address"
                                    margin="normal"
                                    name="address"
                                    onChange={handleInputChange}
                                />
                                <StyledButton
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleContinue}
                                >
                                    Continue
                                </StyledButton>
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
                                                <Button
                                                    key={index}
                                                    variant="outlined"
                                                    className={`currentDate-container ${selectedDate === dateObj ? "active" : ""}`}
                                                    onClick={() => setSelectedDate(dateObj)}
                                                >
                                                    <span className="dateMonth">{dateObj.date}</span>
                                                    <span className="days">{dateObj.day}</span>
                                                </Button>
                                            ))}
                                            <Button
                                                variant="outlined"
                                                onClick={() => setDatePickerOpen(true)}
                                            >
                                                <CiCalendar size={25} />
                                                Pick a date
                                            </Button>
                                            {datePickerOpen && (
                                                <ReactDatePicker
                                                    className="react-datepicker"
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    inline
                                                    onClickOutside={() => setDatePickerOpen(false)}
                                                />
                                            )}
                                        </ButtonGroupContainer>
                                    </ButtonGroupContainer>
                                </Box>
                                <Box className="time-Container">
                                    <Typography variant="subtitle1" gutterBottom>
                                        Select a time
                                    </Typography>
                                    <Typography variant="body" gutterBottom>
                                        Session duration will be between 30-45 mins
                                    </Typography>
                                    <ButtonGroupContainer>
                                        {[
                                            "8:00 AM",
                                            "9:00 AM",
                                            "10:00 AM",
                                            "11:00 AM",
                                            "12:00 PM",
                                            "1:00 PM",
                                            "2:00 PM",
                                            "3:00 PM",
                                            "4:00 PM",
                                            "5:00 PM",
                                            "6:00 PM",
                                            "7:00 PM",
                                            "8:00 PM",
                                            "9:00 PM",
                                            "10:00 PM",
                                        ].map((time, index) => (
                                            <Button
                                                key={index}
                                                variant="outlined"
                                                className={`currentTime-container ${selectedTime === time ? "active" : ""}`}
                                                onClick={() => setSelectedTime(time)}
                                            >
                                                {time}
                                            </Button>
                                        ))}
                                    </ButtonGroupContainer>
                                </Box>
                                <Box className="service-image">
                                    <Box className="service1">
                                        <img src={NestedModelImg1} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Patient safety and quality{" "}
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg2} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Easy and quick refunds
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg3} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Hassle free rescheduling
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "90%" }}>
                                    <StyledButton
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleConfirmationOpen}
                                    >
                                        Continue
                                    </StyledButton>
                                </Box>
                            </Box>
                        </StyledCardContent1>
                    </StyledCard1>
                </ModalBox>
            </Modal>

            <Modal open={thirdModalOpen} onClose={handleConfirmationClose}>
                <ModalBox>
                    <StyledCard3 className="confirmation-modal-card">
                        <Box className="confirmation-modal-header">
                            <Typography variant="h6" align="center">
                                Review and pay
                            </Typography>
                            <IconButton
                                className="close-icon"
                                onClick={handleConfirmationClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <StyledCardContent3>
                            <Box className="session-container">
                                <Box className="session-details">
                                    <Typography variant="h4" gutterBottom>
                                        Online session with
                                    </Typography>
                                    <Box className="session-info">
                                        <img src={PhysioModel3Img} alt="" />
                                        <Box className="staff-detail">
                                            <Typography variant="subtitle1" gutterBottom>
                                                Best available physiotherapist
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Based on patient’s care needs, we’ll assign the best
                                                physiotherapist.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="session-time">
                                    <Typography variant="body2" color="textSecondary">
                                        <FaRegClock size={22} />{" "}
                                        {selectedDate ? selectedDate.date : "Select Date"},{" "}
                                        {selectedDate
                                            ? selectedDate.day.substring(0, 3)
                                            : "Select day"}{" "}
                                        - {selectedTime ? selectedTime : "Select Time"}
                                    </Typography>
                                    <Box className="Change-sessionTime">
                                        <Button variant="outlined"  onClick={handleChangeSlot}>
                                            <SlPencil size={15} color="black" /> Change
                                        </Button>
                                    </Box>
                                </Box>
                                <Box className="service-image">
                                    <Box className="service1">
                                        <img src={NestedModelImg1} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Patient safety                                                               quality{" "}
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg2} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Easy and quick refunds
                                        </Typography>
                                    </Box>
                                    <Box className="service1">
                                        <img src={NestedModelImg3} alt="" />
                                        <Typography variant="body" gutterBottom>
                                            Hassle free rescheduling
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="booking-container">
                                <Box className="booking-info">
                                    <Typography variant="subtitle1" gutterBottom>
                                        Booking for
                                    </Typography>
                                    <Box className="info-box1">
                                        <Typography variant="body2" gutterBottom>
                                            Name:
                                        </Typography>
                                        <Typography variant="body" gutterBottom>
                                            {userDetails.name}
                                        </Typography>
                                    </Box>
                                    <Box className="info-box1">
                                        <Typography variant="body2" gutterBottom>
                                            Mobile no:
                                        </Typography>
                                        <Typography variant="body" gutterBottom>
                                            {userDetails.mobile}
                                        </Typography>
                                    </Box>
                                    <Box className="info-box1">
                                        <Typography variant="body2" gutterBottom>
                                            City:
                                        </Typography>
                                        <Typography variant="body" gutterBottom>
                                            {userDetails.address}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box className="payment-summary">
                                    <Typography variant="subtitle1" gutterBottom>
                                        Payment summary
                                    </Typography>
                                    <Box className="payment-item">
                                        <Typography variant="body2">Session fee</Typography>
                                        <Typography variant="body">₹ 249</Typography>
                                    </Box>
                                    <Box className="payment-item">
                                        <Typography variant="body2">Tax (GST 0%)</Typography>
                                        <Typography variant="body">₹ 0</Typography>
                                    </Box>
                                    <Box className="payment-item total">
                                        <Typography variant="h6">Total</Typography>
                                        <Typography variant="h6">{price}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <StyledButton
                                className="PayBtn"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Pay Now
                            </StyledButton>
                        </StyledCardContent3>
                    </StyledCard3>
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
  width: 97%;

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

  .Content-header {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .Content-header h6,
  .Content-header span {
    font-family: outfit;
    font-size: 30px;
    font-weight: 500;
  }
  .Content-header span {
    color: ${Colors.BACKGROUND_COLOR1};
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    background-color: ${Colors.WHITE};
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
  margin: 16px 0px 8px 0px !important;
  height: 50px;
`;

const ButtonGroupContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  .react-datepicker {
    position: absolute;
    left: 56%;
    top: 25%;
    z-index: 1;
  }

  .currentDate-container {
    display: felx;
    flex-direction: column;
  }

  .currentDate-container.active,
  .currentTime-container.active {
    background-color: ${Colors.BACKGROUND_COLOR1};
    color: ${Colors.WHITE};
  }
  .currentDate-container .dateMonth {
    font-size: 18px;
    font-weight: 500;
    font-family: outfit;
  }

  .currentDate-container .days {
    font-size: 11px;
    font-weight: 400;
    font-family: outfit;
  }

  button.MuiButton-outlinedPrimary {
    color: ${Colors.FONT_COLOR1};
    background-color: ${Colors.WHITE};
    border-color: lightgray;
    height: 60px;
    width: 130px;
    font-size: 18px;
    font-weight: 500;
    font-family: outfit;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;

const StyledCard1 = styled(Card)`
  width: 50%;

  .nested-modal-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background: rgba(216, 231, 255, 1);
  }

  .nested-modal-header h6 {
    width: 100%;
  }
`;

const StyledCardContent1 = styled(CardContent)`
  .slot-section {
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: center;
  }
  .date-Container,
  .time-Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    // gap: 10px;
    padding: 10px 16px;
    background-color: ${Colors.BACKGROUND_COLOR9};
    border-radius: 10px;
  }

  .date-Container h6,
  .time-Container h6 {
    font-size: 25px;
    font-family: outfit;
    font-weight: 500;
  }

  .time-Container span {
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

  .service1 span {
    font-size: 15px;
    font-family: outfit;
    font-weight: 400;
    text-align: center;
    color: rgba(119, 119, 119, 1);
  }
`;

//  const StyledImage = styled('img')`
// width: 100%;
// border-radius: 8px;
// `;

const StyledCard3 = styled(Card)`
  width: 60%;
  overflow-y: auto;
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 8px;
  margin: auto;

  .confirmation-modal-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background-color: ${Colors.BACKGROUND_COLOR4};
  }
  .confirmation-modal-header h6 {
    width: 100%;
  }
`;

const StyledCardContent3 = styled(CardContent)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .session-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .session-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border: 2px solid lightgray;
    border-radius: 15px;
  }

  .session-details h4 {
    font-size: 25px;
    font-family: outfit;
    font-weight: 500;
  }

  .session-details h6 {
    font-size: 20px;
    font-family: outfit;
    font-weight: 500;
  }

  .session-info .staff-detail p {
    font-size: 16px;
    font-family: outfit;
    font-weight: 300;
  }

  .session-info {
    display: flex;
    gap: 25px;
  }

  .session-time {
    width: 100%;
    padding: 12px 20px;
    background-color: ${Colors.BACKGROUND_COLOR4};
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
  }

  .session-time p {
    font-size: 18px;
    font-family: "Outfit";
    font-weight: 400;
    display: flex;
    align-items: center;
    gap:10px;
    color: ${Colors.FONT_COLOR1};
  }

  button.MuiButton-outlinedPrimary {
    color: ${Colors.FONT_COLOR1};
    background-color: ${Colors.WHITE};
    border-color: lightgray;
    height: 45px;
    width: 95px;
    justify-content: space-around;
    padding : 0px;
  }

  .PayBtn {
    grid-column: 1/3;
  }
  .service-image {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .service1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .service1 span {
    font-size: 15px;
    font-family: outfit;
    font-weight: 400;
    text-align: center;
    color: rgba(119, 119, 119, 1);
  }


  .booking-container {
     background: ${Colors.BACKGROUND_COLOR9};
     display: flex;
    flex-direction: column;
    align-items: baseline;
    border-radius: 15px;
  }
  .booking-container .booking-info,
    .payment-summary  {
     padding: 20px;
    display: flex;
    flex-direction: column;
    width: 80%;
     gap: 10px;
  }
  .booking-info  h6,
  .payment-summary h6{
    font-size: 22px;
    font-family: outfit;
    font-weight: 400;
  }

  .booking-info .info-box1 {
     display: flex;
     justify-content: space-between; 
  }

  .booking-info .info-box1 p,
    .payment-summary .payment-item p{
     font-size: 20px;
     font-family: outfit;
     font-weight: 400;
  }
  .booking-info .info-box1 span,
  .payment-summary .payment-item span{

    font-size: 20px;
     font-family: outfit;
     font-weight: 300;
     color: ${Colors.FONT_COLOR3};
  }

  
  .payment-summary .payment-item {
     display: flex;
     justify-content: space-between;
  }
`;

