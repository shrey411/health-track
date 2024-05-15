import React from "react";
import { Wrapper } from "./Styled";
import { CertificationSkill1, CertificationSkill2, CertificationSkill3 } from "../../assets/Images";

const CertificateSection = () => {
    const certifications = [
        { imgSrc: CertificationSkill1, title: 'Highest Customer Rating' },
        { imgSrc: CertificationSkill2, title: 'First Priority Customer Satisfaction' },
        { imgSrc: CertificationSkill3, title: 'Experienced Certified Staff' },
      ];
  return (
    <>
      <Wrapper>
      <div className="NursingSkill-certificate">
      <div className="Certificate-container">
        {certifications.map((cert, index) => (
          <div className={`certificate-${index + 1}`} key={index}>
            <img src={cert.imgSrc} alt={cert.title} />
            <h5>{cert.title}</h5>
          </div>
        ))}
      </div>
    </div>
      </Wrapper>
    </>
  );
};

export default CertificateSection;
