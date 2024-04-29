import React from 'react';
import { Wrapper } from './Style';
import { Link } from 'react-router-dom';
import { HealthCareLogo } from '../../assets/Images';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoPersonOutline, MdKeyboardArrowDown, RiMenuFill } from '../../assets/Icons';

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
    <Wrapper>
      <section className="container-fluid main-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid header-box">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src={HealthCareLogo} alt="Healthcare Logo" className="header-logo" />
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"> <RiMenuFill/></span>
              </button>
            </div>
            <div className="collapse navbar-collapse main-nav-box1 " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/company">
                    Company
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
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
                    'aria-labelledby': 'profile-button',
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
    </Wrapper>
  );
};

export default Header;
