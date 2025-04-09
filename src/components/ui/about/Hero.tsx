import React from "react";
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  Button,
} from "./About.styles";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <small>New Arrival</small>
        <Title>Discover Our New Collection</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Subtitle>
        <Button>BUY NOW</Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
