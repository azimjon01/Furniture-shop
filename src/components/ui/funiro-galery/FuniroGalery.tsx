import {
  Container,
  Grid,
  Hashtag,
  Image,
  ImageWrapper,
  Title,
} from "./FuniroGalery.styles";

const FuniroGallery = () => {
  const images = [
    { src: "/assets/images/funiro-galery/funiro-galery-one.png", rowSpan: 1 },
    { src: "/assets/images/funiro-galery/funiro-galery-two.png", rowSpan: 2 },
    { src: "/assets/images/funiro-galery/funiro-galery-three.png", rowSpan: 1 },
    { src: "/assets/images/funiro-galery/funiro-galery-four.png", rowSpan: 1 },
    { src: "/assets/images/funiro-galery/funiro-galery-five.png", rowSpan: 2 },
    { src: "/assets/images/funiro-galery/funiro-galery-six.png", rowSpan: 1 },
    { src: "/assets/images/funiro-galery/funiro-galery-seven.png", rowSpan: 2 },
    { src: "/assets/images/funiro-galery/funiro-galery-eight.png", rowSpan: 1 },
    { src: "/assets/images/funiro-galery/funiro-galery-nine.png", rowSpan: 2 },
  ];

  return (
    <Container>
      <Title>Share your setup with</Title>
      <Hashtag>#FuniroFurniture</Hashtag>
      <Grid>
        {images.map((img, index) => (
          <ImageWrapper key={index} rowSpan={img.rowSpan}>
            <Image src={img.src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Grid>
    </Container>
  );
};

export default FuniroGallery;
