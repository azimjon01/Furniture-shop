import { useState } from "react";
import {
  Card,
  Description,
  IconWrapper,
  TextContent,
  Title,
} from "./Feature.styles";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHover, SetIsHover] = useState(false);
  return (
    <Card
      onMouseEnter={() => SetIsHover(true)}
      onMouseLeave={() => SetIsHover(false)}
    >
      <IconWrapper isHover={isHover} src={icon} alt="Features icon" />
      <TextContent isHover={isHover}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Card>
  );
};

export default FeatureCard;
