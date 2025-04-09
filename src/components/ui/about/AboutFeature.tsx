import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { FeatureContainer } from "./About.styles";
import FeatureItem from "./AboutFeatureItem";

const AboutFeature: React.FC = () => {
  return (
    <FeatureContainer>
      <FeatureItem
        icon={<FaShippingFast />}
        title="Free Delivery"
        description="Lorem ipsum dolor sit amet."
      />
      <FeatureItem
        icon={<FaHeadset />}
        title="Support 24/7"
        description="Lorem ipsum dolor sit amet."
      />
      <FeatureItem
        icon={<FaShieldAlt />}
        title="100% Authentic"
        description="Lorem ipsum dolor sit amet."
      />
    </FeatureContainer>
  );
};

export default AboutFeature;
