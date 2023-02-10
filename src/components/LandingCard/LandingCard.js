import React from "react";
import BrandRecognitionLogo from "../../assets/images/icon-brand-recognition.svg";
import DetailedRecordsLogo from "../../assets/images/icon-detailed-records.svg";
import FullyCustomizableLogo from "../../assets/images/icon-fully-customizable.svg";
import "./landingCard.css";

const CARD_TYPES = {
  "brand-recognition": {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    logo: BrandRecognitionLogo,
  },
  "detailed-records": {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    logo: DetailedRecordsLogo,
  },
  "fully-customizable": {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable llinks, supercharging audience engagement.",
    logo: FullyCustomizableLogo,
  },
};

const LandingCard = ({ type, marginTop }) => {
  const {
    [type]: { title: cardTitle, description: cardDescription, logo: cardLogo },
  } = CARD_TYPES;

  return (
    <div className="landing-card-container" style={{ marginTop }}>
      <div className="card-icon-container">
        <img className="card-icon" src={cardLogo} />
      </div>
      <h3 className="card-title">{cardTitle}</h3>
      <p className="description">{cardDescription}</p>
    </div>
  );
};

export default LandingCard;
