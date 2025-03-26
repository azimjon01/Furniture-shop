import { inspirationsData } from "./data";
import {
  Container,
  Title,
  Grid,
  Card,
  Image,
  Content,
  CardTitle,
  Description,
} from "./Inspirations.styles";

const Inspirations = () => {
  return (
    <Container>
      <Title>{inspirationsData.bigTitle}</Title>
      <Grid>
        {inspirationsData.inspirations.map((inspiration) => (
          <Card key={inspiration.id}>
            <Image src={inspiration.image} alt={inspiration.title} />
            <Content>
              <CardTitle>{inspiration.title}</CardTitle>
              <Description>{inspiration.description}</Description>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Inspirations;
