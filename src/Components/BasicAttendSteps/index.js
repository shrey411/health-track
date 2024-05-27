// src/Components/MedicalAttendantSteps.js
import React from 'react';
import { Wrapper } from './Styled';
import AccordionItem from '../Common/FaqAccordion';
import ReusableAccordion from '../Common/Accordion';
import { KneePain, LowerBackPain, ShoulderPain, StrockPain } from '../../assets/Images';

const BasicAttendantSteps = ({ showPhysioFaq, imageSrc, isEmergencyPage }) => {

  const accordionsData = [
    {
      title: "Stroke",
      details: `How we can help: \n Our physiotherapists work closely with stroke survivors to design personalized treatment plans.`,
      equipments: [
        "Parallel bars and gait belts",
        "Electric stimulation devices",
        "Reacher's and dressing aids"
      ],
      isPhysioPage: true,
      imageUrl: StrockPain,
    },
    {
      title: "Lower back pain",
      details: "Details about lower back pain...",
      equipments: null,
      isPhysioPage: true,
      imageUrl: LowerBackPain,

    },
    {
      title: "Neck and shoulder",
      details: "Details about neck and shoulder pain...",
      equipments: null,
      isPhysioPage: true,
      imageUrl: ShoulderPain,

    },
    {
      title: "Knee pain",
      details: "Details about knee pain...",
      equipments: null,
      isPhysioPage: true,
      imageUrl: KneePain,
    }
  ];

  const AllPageAttendentData = [
    {
      number: 1,
      title: "Contact us",
      childContent: "Select the duration of your care plan, pay for the service, and begin your journey with our compassionate Nurses",
    },
    {
      number: 2,
      title: "Choose Attends",
      childContent: "Select the duration of your care plan, pay for the service, and begin your journey with our compassionate Nurses",
    },
    {
      number: 3,
      title: "Pay for the Service",
      childContent: "Select the duration of your care plan, pay for the service, and begin your journey with our compassionate Nurses",
    },

  ]


  const TubeFeedingData = [
    {
      number: 1,
      title: "Nasogastric Tube",
      childContent: "A more permanent solution, this tube is directly inserted into the stomach through the abdominal wall.",
    },
    {
      number: 2,
      title: "Nasojejunal Tube",
      childContent: "A more permanent solution, this tube is directly inserted into the stomach through the abdominal wall.",
    },
    {
      number: 3,
      title: "Gastrostomy Tube",
      childContent: "A more permanent solution, this tube is directly inserted into the stomach through the abdominal wall.",
    },
    {
      number: 4,
      title: "Jejunotomy Tube",
      childContent: "A more permanent solution, this tube is directly inserted into the stomach through the abdominal wall.",
    },

  ]


  return (
    <>
      <Wrapper>
        <section className="HomeNursingService">
          <main className="main-HomeNursing">
            <div className="HomeNursing-container">
              {!showPhysioFaq ? (
                <div className="HomeNursing-faq">
                  <div className="faq-box">
                    { !isEmergencyPage ?
                      <p>Your credible home nursing services are just a call away.</p> :
                      <p>Here's a glimpse of the options we provide:</p>
                    }
                  </div>
                  <div className="faq-question">
                    {isEmergencyPage ? (
                      <div className="accordion">
                        {TubeFeedingData.map((tubeData, index) => (
                          <AccordionItem
                            title={tubeData.title}
                            number={tubeData.number}
                            children={tubeData.childContent}
                          />
                        ))}
                      </div>
                    ) :
                      <div className="accordion">
                        {AllPageAttendentData.map((attendData, index) => (
                          <AccordionItem
                            title={attendData.title}
                            number={attendData.number}
                            children={attendData.childContent}
                          />
                        ))}
                      </div>
                    }
                  </div>
                </div>
              ) :
                <div className="HomeNursing-faq">
                  {accordionsData.map((accordion, index) => (
                    <ReusableAccordion
                      key={index}
                      title={accordion.title}
                      details={accordion.details}
                      equipments={accordion.equipments}
                      isPhysioPage={accordion.isPhysioPage}
                      imageUrl={accordion.imageUrl}
                    />
                  ))}
                </div>
              }
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
