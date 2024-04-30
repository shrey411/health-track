
import React from 'react';
import {EmargencyNursing, Physiotherapy, ICUCareathome, MedicalAttendant, Homeattend, NursesPage, Expect} from '../../assets/Images/index'
import {Wrapper} from '../Nurses/Style.js'

const ServicesData = [
  {
    id: 1,
    imageUrl: Homeattend,
    altText: "Home Attend Nursing",
    title: "Home Attend Nursing",
    listings: "40"
  },
  {
    id: 2,
    imageUrl: MedicalAttendant,
    altText: "Medical Attendant",
    title: "Medical Attendant",
    listings: "50"
  },
  {
    id: 3,
    imageUrl: ICUCareathome,
    altText: "ICU Care at Home",
    title: "ICU Care at Home",
    listings: "20"
  },
  {
    id: 4,
    imageUrl: Physiotherapy,
    altText: "Physiotherapy",
    title: "Physiotherapy",
    listings: "25"
  },
  {
    id: 5,
    imageUrl: EmargencyNursing,
    altText: "Emergency Nursing Care",
    title: "Emergency Nursing Care",
    listings: "30"
  }
];

const OurServicesListItem = ({ service }) => {
  return (
    <div className="serviceslist">
      <img src={service.imageUrl} alt={service.altText} className="rounded-lg" />
    </div>
  );
};

const Nurses = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="text-center">
        <h2 className="text">Compassionate Care at Home From Qualified and Trustworthy Nurses</h2>
      </div>
      <div className="Main">
        {ServicesData.map(service => (
          <OurServicesListItem key={service.id} service={service} />
        ))}
      </div>
    </div>
    <div className='InfoWhattoExpect'>
    <img src={Expect} alt="img"/>
    </div>
    <div className='Staf'>
    <img src={NursesPage} alt="img"/>
    </div>
    </Wrapper>
  );
};

export default Nurses;
