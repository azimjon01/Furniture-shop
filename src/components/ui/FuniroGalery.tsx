import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Hashtag = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div<{ rowSpan?: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FuniroGallery = () => {
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
