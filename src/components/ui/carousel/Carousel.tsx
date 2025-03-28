import React, { useState } from "react";
import informationRight from "../../../assets/icons/containerRight.svg";
import { slides } from "./CarouselData";
import {
  SliderWrapper,
  Content,
  ExploreButton,
  SlideContainer,
  Slide,
  SlideItem,
  SlideText,
  PrevButton,
  NextButton,
  NavIcon,
  DotContainer,
  Dot,
  InformationPriceBox,
  InformationRight,
  TextContainer,
} from "./Carousel.styles";
import { Pagination } from "./Carousel.styles";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderWrapper>
      <Content>
        <h2>{slides[currentIndex].bigTitle}</h2>
        <p>{slides[currentIndex].bigSubtitle}</p>
        <ExploreButton>Explore More</ExploreButton>
      </Content>

      <SlideContainer>
        <Slide translateX={currentIndex}>
          {slides.map((slide) => (
            <SlideItem
              key={slide.id}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <SlideText>
                <TextContainer>
                  <h4>{slide.subtitle}</h4>
                  <h2>{slide.title}</h2>
                </TextContainer>
                <InformationPriceBox>
                  <InformationRight src={informationRight} alt="Information" />
                </InformationPriceBox>
              </SlideText>
            </SlideItem>
          ))}
        </Slide>

        <PrevButton onClick={prevSlide}>
          <NavIcon rotate="180deg" src="/assets/icons/carusel-icon.svg" />
        </PrevButton>
        <NextButton onClick={nextSlide}>
          <NavIcon rotate="0deg" src="/assets/icons/carusel-icon.svg" />
        </NextButton>

        <Pagination>
          {slides.map((_, index) => (
            <DotContainer
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            >
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            </DotContainer>
          ))}
        </Pagination>
      </SlideContainer>
    </SliderWrapper>
  );
};

export default Carousel;
