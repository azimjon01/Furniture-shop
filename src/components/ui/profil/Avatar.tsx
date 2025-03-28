import React from "react";
import styled from "@emotion/styled";

const AvatarContainer = styled.div({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
});

const AvatarImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <AvatarContainer>
      <AvatarImage
        src="/assets/images/avatar-image/avatar2.jpg"
        alt={alt || "Profile Picture"}
      />
    </AvatarContainer>
  );
};

export default Avatar;
