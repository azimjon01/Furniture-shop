import React from "react";
import {
  FeatureItemWrapper,
  IconWrapper,
  FeatureText,
  FeatureTitle,
  FeatureDescription,
} from "./About.styles";
import { Link } from "react-router-dom";

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
      <Link to={"/about"}>
        <IconWrapper>{icon}</IconWrapper>
        <FeatureText>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDescription>{description}</FeatureDescription>
        </FeatureText>
      </Link>
    </FeatureItemWrapper>
  );
};

export default FeatureItem;
