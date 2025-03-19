import styled from "@emotion/styled";
import { useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = styled.div({
  width: "23.17vw",
  height: "14.10vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

const IconWrapper = styled.img<{ isHover: boolean }>(({ isHover }) => ({
  width: "38px",
  height: "38px",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
  transform: isHover ? "translateX(40px)" : "translateX(0px)",
}));

const TextContent = styled.div<{ isHover: boolean }>(({ isHover }) => ({
  width: "14.2vw",
  height: "6.9vh",
  cursor: "pointer",
  transform: isHover ? "scale(1.1)" : "scale(1)",
}));

const Title = styled.h1({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "150%",
  letterSpacing: "0%",
});

const Description = styled.p({
  color: "#898989",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "150%",
  letterSpacing: "0%",
});

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
