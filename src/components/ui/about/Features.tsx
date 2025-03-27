import {
  Section,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
} from "./About.styles";
import { FaCouch, FaLeaf, FaUserCheck } from "react-icons/fa";

const Features = () => {
  return (
    <Section>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>
            <FaCouch />
          </FeatureIcon>
          <FeatureText>Modern & Stylish Designs</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaLeaf />
          </FeatureIcon>
          <FeatureText>Eco-Friendly Materials</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaUserCheck />
          </FeatureIcon>
          <FeatureText>Trusted by Thousands</FeatureText>
        </FeatureCard>
      </FeaturesGrid>
    </Section>
  );
};

export default Features;
