import React, { useState } from 'react'
import { Wrapper } from './Style';

import { Link } from 'react-router-dom';
import { HealthCareLogo } from '../../assets/Images';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoPersonOutline, MdKeyboardArrowDown } from '../../assets/Icons';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Wrapper>
        <section className='container-fluid main-header'>
          <main className='main-navbar'>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid header-box">
                <div className='nav-box1'>

                  <div className='header-logo'>
                    <img src={HealthCareLogo} alt='' />
                  </div>

                  <div className='main-nav-box1'>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Aboue</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Explore Service</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Compant</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='Profile-dropdown'>
                  <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    My Profile&nbsp;<span><MdKeyboardArrowDown/></span>
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem className="custome-font" onClick={handleClose}><span><IoPersonOutline/></span>My Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Favorite</MenuItem>
                    <MenuItem onClick={handleClose}>Appointments</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </nav>
          </main>
        </section>
      </Wrapper>
    </>
  )
}

export default Header;