import React from "react";
import {
  InspirationContainer,
  Title,
  Subtitle,
  ImageGrid,
  ImageItem,
} from "./AboutInspiration.styles";

const images = [
  "/assets/images/about/about-inspiration-image/about-inspiration-one.png",
  "/assets/images/about/about-inspiration-image/about-inspiration-two.png",
  "/assets/images/about/about-inspiration-image/about-inspiration-three.png",
];

const AboutInspiration: React.FC = () => {
  return (
    <InspirationContainer>
      <Title>Inspiration Collection</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Subtitle>
      <ImageGrid>
        {images.map((src, index) => (
          <ImageItem key={index}>
            <img src={src} alt={`Inspiration ${index + 1}`} />
          </ImageItem>
        ))}
      </ImageGrid>
    </InspirationContainer>
  );
};

export default AboutInspiration;
