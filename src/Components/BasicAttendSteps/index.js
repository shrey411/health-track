// src/Components/MedicalAttendantSteps.js
import React from 'react';
import { Wrapper } from './Styled';
import AccordionItem from '../Common/FaqAccordion';

const BasicAttendantSteps = ({ header, imageSrc, faqText }) => {
  return (
    <>
    <Wrapper>
    <section className="HomeNursingService">
    <main className="main-HomeNursing">
      <div className="HomeNursing-container">
        <div className="HomeNursing-faq">
          <div className="faq-box">
            <p>Your credible home nursing services are just a call away.</p>
          </div>
          <div className="faq-question">
            <div className="accordion">
              <AccordionItem number={1} title="Contact Us">
                <p>You can contact us via email at support@example.com.</p>
              </AccordionItem>
              <AccordionItem number={2} title="Choose Attends">
                <p>Frequently Asked Questions.</p>
              </AccordionItem>
              <AccordionItem number={3} title="Pay for the Service">
                <p>Select the duration of your care plan, pay for the service, and begin your journey with our compassionate Nurses</p>
              </AccordionItem>
            </div>

          </div>
        </div>
        <div className="HomeNursing-video">
          <div className="video-box">
            <img src={imageSrc} alt="" />
          </div>
        </div>
      </div>
    </main>
  </section>
  </Wrapper>
  </>
  );
};

export default BasicAttendantSteps;
