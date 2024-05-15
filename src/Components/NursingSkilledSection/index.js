import React from 'react'
import CertificateSection from '../CertificateSection'
import { Expectation1, Expectation2, Expectation3, Expectation4 } from '../../assets/Images'
import { Wrapper } from './Styled'

const NursingSkilledSection = ({ NursingExpect }) => {
    return (
        <>
        <Wrapper>
            <div className="NursingSkill-Box">
                <div className="NursingSkill-ques">
                    <h3>Why choose TTHC for home attendant services?</h3>
                </div>
                <div className="NursingSkill-answer">
                    <p>Due to changes in the family structure—from
                        the multi-generation family under one roof to
                        the nuclear family—many of us are facing challenges
                        in caring for our elderly parents. This challenge
                        increases if the children live in one part of the
                        world and the parents in another. Distance can make it
                        difficult to assess a parent’s needs and get them the care
                        they deserve. Tech Tricks Health Care Service is committed
                        to helping you care for the health and well-being of your
                        loved ones. We understand that nothing is better than being
                        in the comfort of home, surrounded by family and friends.
                        We can be there when you can't to help your aging parents
                        and other elderly family members live their golden years at home.
                        We provide health care services at your home. It has a team of
                        well-trained nurses and more supportive staff to take care
                        of elderly, sick, bedridden patients.</p>
                </div>
                <CertificateSection />
            </div>

            { NursingExpect && ( <div className="NursingExpect-section">
                <div className="NursingExpect-header">
                    <h3>What to Expect</h3>
                </div>
                <div className="NursingExpect-items">
                    <div className="expectation-container">
                        <div className="expectation-box1">
                            <div className="expectation-img">
                                <img src={Expectation1} alt="" />
                            </div>
                            <div className="expectation-text">
                                <p>12/24 hour Nursing Services</p>
                            </div>
                        </div>
                        <div className="expectation-box2">
                            <div className="expectation-img">
                                <img src={Expectation2} alt="" />
                            </div>
                            <div className="expectation-text">
                                <p>Free
                                    Doctor Consultation</p>
                            </div>
                        </div>
                        <div className="expectation-box3">
                            <div className="expectation-img">
                                <img src={Expectation3} alt="" />
                            </div>
                            <div className="expectation-text">
                                <p>Background check for all Nurse</p>
                            </div>
                        </div>
                        <div className="expectation-box4">
                            <div className="expectation-img">
                                <img src={Expectation4} alt="" />
                            </div>
                            <div className="expectation-text">
                                <p>Trained Nurse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

            
            <div className="NursingPlace-service">
                <div className="NursingPlace-header">
                    <h3>Because there is no place like home</h3>
                </div>
                <div className="NursingPlace-content">
                    <p>We intend to be the most trusted home healthcare partner to our clients and deliver people-centric, high quality patient care to them in the comfort of their homes.</p>
                    <ul>
                        <li>Bedridden Care.</li>
                        <li>Help for daily Activities of a senior citizen.</li>
                        <li>Care for loved one recovering from Surgery.</li>
                        <li>Tracheostomy Care at Home.</li>
                        <li>Care for patients recovering Stroke</li>
                    </ul>
                </div>
            </div>
            </Wrapper>
        </>
    )
}

export default NursingSkilledSection