import { useCarouselStore } from "./store";
import {
  Container,
  Title,
  SliderWrapper,
  Slide,
  Card,
  Image,
  Content,
  CardTitle,
  DateText,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot,
} from "./TipsTricks.styles";

const Carousel = () => {
  const { slides, currentIndex, nextSlide, prevSlide } = useCarouselStore();

  return (
    <Container>
      <Title>Tips & Tricks</Title>
      <SliderWrapper>
        <PrevButton onClick={prevSlide}>‹</PrevButton>
        <Slide style={{ transform: `translateX(-${currentIndex * 387}px)` }}>
          {slides.map((slide) => (
            <Card key={slide.id}>
              <Image src={slide.img} alt={slide.title} />
              <Content>
                <CardTitle>{slide.title}</CardTitle>
                <DateText>{slide.date}</DateText>
              </Content>
            </Card>
          ))}
        </Slide>
        <NextButton onClick={nextSlide}>›</NextButton>
      </SliderWrapper>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => useCarouselStore.setState({ currentIndex: index })}
          />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default Carousel;
