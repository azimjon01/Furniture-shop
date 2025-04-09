import React from "react";
import {
  Section,
  Title,
  Description,
  Grid,
  Card,
  ImageWrapper,
  Image,
  Label,
} from "./Browse.styles";

const categories = [
  {
    id: 1,
    name: "Dining",
    image: "/assets/images/about/browse-images/browse-one.png",
  },
  {
    id: 2,
    name: "Living",
    image: "/assets/images/about/browse-images/browse-two.png",
  },
  {
    id: 3,
    name: "Bedroom",
    image: "/assets/images/about/browse-images/browse-three.png",
  },
];

const Browse: React.FC = () => {
  return (
    <Section>
      <Title>Browse The Range</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>
      <Grid>
        {categories.map((category) => (
          <Card key={category.id}>
            <ImageWrapper>
              <Image src={category.image} alt={category.name} />
            </ImageWrapper>
            <Label>{category.name}</Label>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Browse;
