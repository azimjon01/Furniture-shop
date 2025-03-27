import React from "react";
import {
  FeatureItemWrapper,
  IconWrapper,
  FeatureText,
  FeatureTitle,
  FeatureDescription,
} from "./About.styles";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <FeatureItemWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <FeatureText>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureText>
    </FeatureItemWrapper>
  );
};

export default FeatureItem;
