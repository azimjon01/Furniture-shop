import React from "react";
import {
  Section,
  Content,
  Title,
  Text,
  Button,
  ImageWrapper,
  BackgroundCircle,
  Image,
} from "./Beautify.styles";

const Beautify: React.FC = () => {
  return (
    <Section>
      <Content>
        <Title>Beautify Your Space</Title>
        <Text>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
        <Button>Learn More</Button>
      </Content>
      <ImageWrapper>
        <BackgroundCircle />
        <Image src="/assets/images/about/beautify.png" alt="Beautify Image" />
      </ImageWrapper>
    </Section>
  );
};

export default Beautify;
