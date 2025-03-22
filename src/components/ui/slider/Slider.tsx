import prevIcon from "../../../assets/icons/prevIcon.svg";
import nextIcon from "../../../assets/icons/nextIcon.svg";
import informationRight from "../../../assets/icons/informationRight.svg";
import { useCallback, useEffect, useState } from "react";
import {
  Buttons,
  Dot,
  DotContainer,
  InformationCard,
  InformationCardInformation,
  InformationCardPrice,
  InformationCardText,
  InformationCardTitle,
  InformationPriceBox,
  InformationRight,
  NextButton,
  Pagination,
  PrevButton,
  PrevNextIcon,
  ShopNow,
  ShopNowButton,
  ShopNowCard,
  ShopNowText,
  ShopNowTitle,
  Slide,
  SlideImage,
  SliderContainer,
  SliderWrapper,
  SlidesContainer,
} from "./Slider.styles";

import { imagesAll } from "./Slider.store";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesAll.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesAll.length) % imagesAll.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <SliderContainer>
      <ShopNowCard>
        <ShopNow>
          <ShopNowTitle>{imagesAll[currentIndex].title}</ShopNowTitle>
          <ShopNowText>{imagesAll[currentIndex].description}</ShopNowText>
          <ShopNowButton>Shop Now</ShopNowButton>
        </ShopNow>
      </ShopNowCard>
      <InformationCard>
        <InformationCardInformation>
          <InformationCardTitle>
            {imagesAll[currentIndex].smallTitle}
          </InformationCardTitle>
          <InformationCardText>
            {imagesAll[currentIndex].subtitle}
          </InformationCardText>
          <InformationCardPrice>
            ${imagesAll[currentIndex].price}
          </InformationCardPrice>
        </InformationCardInformation>
        <InformationPriceBox>
          <InformationRight src={informationRight} alt="Information" />
        </InformationPriceBox>
      </InformationCard>
      <Pagination>
        {imagesAll.map((_, index) => (
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
      <Buttons>
        <PrevButton onClick={prevSlide}>
          <PrevNextIcon src={prevIcon} />
        </PrevButton>
        <NextButton onClick={nextSlide}>
          <PrevNextIcon src={nextIcon} />
        </NextButton>
      </Buttons>
      <SliderWrapper>
        <SlidesContainer index={currentIndex}>
          {imagesAll.map((img, index) => (
            <Slide key={index}>
              <SlideImage src={img.img} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </SlidesContainer>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
