import React, { useState } from "react";
import { Wrapper } from "./Style";
import { Link } from "react-router-dom";
import { TechTricksLogo } from "../../assets/Images";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  IoPersonOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  RiMenuFill,
} from "../../assets/Icons";

import styled from "styled-components";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectMenuItem = (item) => {
    setSelectedMenuItem(item);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <Wrapper>
      <section className="container-fluid main-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid header-box">
            <div className="navbar-header">
              <Link className="navbar-brand m-0" to="/">
                <img
                  src={TechTricksLogo}
                  alt="Healthcare Logo"
                  className="header-logo"
                />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  {" "}
                  <RiMenuFill />
                </span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse main-nav-box1 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={toggleDropdown}>
                    Home Care Service{" "}
                    {isDropdownOpen ? (
                      <MdKeyboardArrowUp size={20} />
                    ) : (
                      <MdKeyboardArrowDown size={20} />
                    )}
                  </Link>
                  <DropdownContainer>
                    <DropdownMenu isOpen={isDropdownOpen}>
                      <DropdownMenuItem
                        to="/Nursing Services/Home Attend"
                        onClick={() => selectMenuItem("Home Attendant")}
                        style={{
                          color:
                            selectedMenuItem === "Home Attendant"
                              ? "blue"
                              : "inherit",
                        }}
                      >
                        Home Attendant
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        to="/Nursing Services/Medical Attend"
                        onClick={() => selectMenuItem("Medical Attendant")}
                        style={{
                          color:
                            selectedMenuItem === "Medical Attendant"
                              ? "blue"
                              : "inherit",
                        }}
                      >
                        Medical Attendant
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        to="/Nursing Services/ICU Care"
                        onClick={() => selectMenuItem("ICU Care at Home")}
                        style={{
                          color:
                            selectedMenuItem === "ICU Care at Home"
                              ? "blue"
                              : "inherit",
                        }}
                      >
                        ICU Care at Home
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        to="/Nursing Services/Physiotherapy"
                        onClick={() => selectMenuItem("Physiotherapy")}
                      style={{
                        color:
                          selectedMenuItem === "Physiotherapy"
                            ? "blue"
                            : "inherit",
                      }}
                      >
                      Physiotherapy
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => selectMenuItem("Emergency Nursing Care")}
                      style={{
                        color:
                          selectedMenuItem === "Emergency Nursing Care"
                            ? "blue"
                            : "inherit",
                      }}
                    >
                      Emergency Nursing Care
                    </DropdownMenuItem>
                  </DropdownMenu>
                </DropdownContainer>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Hospital Staffing Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/company">
                  Elder Care services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Company
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Membership
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Need Help
                </Link>
              </li>
            </ul>
            <div className="Profile-dropdown my-2 my-lg-0">
              <Button
                id="fade-button"
                aria-controls={open ? "profile-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                My Profile <MdKeyboardArrowDown />
              </Button>
              <Menu
                id="profile-menu"
                MenuListProps={{
                  "aria-labelledby": "profile-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <IoPersonOutline /> My Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>Favorite</MenuItem>
                <MenuItem onClick={handleClose}>Appointments</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </section>
    </Wrapper >
  );
};

export default Header;

export const DropdownContainer = styled.div`
  position: relative;
  top: 82%;

  @media (max-width: 1350px) {
    top: 35%;
  }
`;

export const DropdownButton = styled.div`
  cursor: pointer;
  padding: 18px 16px;
  display: flex;
  align-items: center;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 220px;
  width: 250px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; // Show/hide based on state
`;

export const DropdownMenuItem = styled(Link)`
  display: block;
  padding: 12.4px 16px;
  cursor: pointer;
  transition: background 0.3s;
  border-bottom: 1px solid gray;
  &:hover {
    text-decoration: none;
    background-color: lightgray; // Change color on hover
  }
`;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;
