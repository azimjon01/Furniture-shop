import React from "react";
import {
  Section,
  Title,
  Description,
  Grid,
  Card,
  ImageWrapper,
  Image,
  StepNumber,
  Label,
  Text,
} from "./HowItWorks.styles";

const steps = [
  {
    id: 1,
    title: "Purchase Securely",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/about/how-it-works-images/how-it-works-one.png",
  },
  {
    id: 2,
    title: "Ships From Warehouse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/about/how-it-works-images/how-it-works-two.png",
  },
  {
    id: 3,
    title: "Style Your Room",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/about/how-it-works-images/how-it-works-three.png",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <Section>
      <Title>How It Works</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>
      <Grid>
        {steps.map((step) => (
          <Card key={step.id}>
            <ImageWrapper>
              <Image src={step.image} alt={step.title} />
            </ImageWrapper>
            <Label>{step.title}</Label>
            <Text>{step.text}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default HowItWorks;
