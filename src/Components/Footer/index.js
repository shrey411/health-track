import React from 'react'
import { Wrapper } from './Style'
import { AppleImg, HealthCareLogo, HealthcareAppImg, PlaystoreImg } from '../../assets/Images'
import { Link } from 'react-router-dom'
import { ImInstagram, ImLinkedin2, RiTwitterXFill, TfiFacebook } from '../../assets/Icons/index'

const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className='container-fluid footer-section mt-5'>
                    <main className='main-footer'>
                        <div className='footer-part-1'>
                            <div className="footer-img-box ">
                                <div className='healthcare-app-detail '>
                                    <div className='app-header'>
                                        <h4>Download Techtricks App!</h4>
                                    </div>
                                    <div className='app-content'>
                                        <p>Contrary to popular belief, Lorem
                                            Ipsum is not simply random text.
                                            It has roots in a piece of classical
                                            Latin literature from
                                        </p>
                                    </div>
                                    <div className='download-source'>
                                        <div className='playstore-box'>
                                            <img src={PlaystoreImg} alt='' />
                                        </div>
                                        <div className='apple-box'>
                                            <img src={AppleImg} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='healthcare-app-img'>
                                    <img src={HealthcareAppImg} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='footer-part-2 mt-5 mb-5'>
                            <div className='social-media-box'>
                                <div className='health-logo'>
                                    <img src={HealthCareLogo} alt="" />
                                </div>
                                <div>
                                    <p>When an unknown printer took a galley of
                                        type aawer between of awtnd scrambled
                                        it to make a type specimen book.</p>
                                </div>
                                <div className='media-icon-box'>
                                    <span><strong>Follow Us On:</strong></span>
                                    <ul className='icon-link'>
                                        <Link to="#"><TfiFacebook /></Link>
                                        <Link to="#"><RiTwitterXFill /></Link>
                                        <Link to="#"><ImLinkedin2 /></Link>
                                        <Link to="#"><ImInstagram /></Link>
                                    </ul>
                                </div>
                            </div>
                            <div className='quickLinks-box'>
                                <h5>Quick Links</h5>
                                <ul className='link-list'>
                                    <Link to="#">Home</Link>
                                    <Link to="#">About</Link>
                                    <Link to="#">Explore Service</Link>
                                    <Link to="#">Blog</Link>
                                    <Link to="#">Contact</Link>
                                    <Link to="#">Become a Vendor</Link>
                                </ul>
                            </div>
                            <div className='catagories-box'>
                                <h5>Catagories</h5>
                                <ul className='link-list'>
                                    <Link to="/Nurses">Nursing Services</Link>
                                    <Link to="#">Hospital Appointments</Link>
                                    <Link to="#">Medicine Delivery</Link>
                                    <Link to="#">Path lab Test</Link>
                                    <Link to="#">Medical Transportation</Link>
                                    <Link to="#">Medical Equipment</Link>
                                </ul>
                            </div>
                            <div className='company-box'>
                                <h5>Company</h5>
                                <ul className='link-list'>
                                    <Link to="#">Privacy Policy</Link>
                                    <Link to="#">Terms & Conditions</Link>
                                    <Link to="#">Refund Policy</Link>
                                    <Link to="#">Help Desk</Link>
                                    <Link to="#">Career</Link>
                                    <Link to="#">Join Us</Link>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-part-3 pt-4 pb-3'>
                            <div className='main-copyright'>
                                <div className='copyright-container'>
                                    <div className='copyright-box'>
                                        <p>Copyright © 2024 Techtricks Healthcare</p>
                                    </div>
                                    <div className='copyright-info'>
                                        <ul className='info-list'>
                                            <Link>FAQ</Link>
                                            <Link>Sign up</Link>
                                            <Link>Login</Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </Wrapper>
        </>
    )
}

export default Footer