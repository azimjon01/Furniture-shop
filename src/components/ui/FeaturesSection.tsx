import styled from "@emotion/styled";
import iconOne from "../../assets/icons/icon-wrapper/icon-one.svg";
import iconTwo from "../../assets/icons/icon-wrapper/icon-two.svg";
import iconThree from "../../assets/icons/icon-wrapper/icon-three.svg";
import iconFour from "../../assets/icons/icon-wrapper/icon-four.svg";
import FeatureCard from "./feature";

const Section = styled.div({
  // width: "86vw",
  height: "11vh",
  margin: "11.46vh 7.32vw",
  display: "flex",
  justifyContent: "space-between",
  gap: "6.37vw",
});

const FeaturesSection: React.FC = () => {
  return (
    <Section>
      <FeatureCard
        icon={iconOne}
        title="High Quality"
        description="Crafted from top materials"
      />
      <FeatureCard
        icon={iconTwo}
        title="Warranty Protection"
        description="Over 2 years"
      />
      <FeatureCard
        icon={iconThree}
        title="Free Shipping"
        description="Order over 150$"
      />
      <FeatureCard
        icon={iconFour}
        title="24/7 Support"
        description="Dedicated support"
      />
    </Section>
  );
};

export default FeaturesSection;
