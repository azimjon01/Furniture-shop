import React from "react";
import styled from "@emotion/styled";

const DetailsContainer = styled.div({
  padding: "20px",
  fontSize: "14px",
  color: "#333",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const DetailItem = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Icon = styled.span({
  fontSize: "16px",
  color: "gray",
});

const ProfileDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <DetailItem>
        <Icon>📍</Icon> Jizzax, O'zbekistan
      </DetailItem>
      <DetailItem>
        <Icon>💼</Icon> Frontend Developer at IT Company
      </DetailItem>
      <DetailItem>
        <Icon>🌐</Icon>{" "}
        <a href="https://github.com/azimjon01">https://github.com/azimjon01</a>
      </DetailItem>
      <DetailItem>
        <Icon>✉️</Icon>
        <a href="mailto:mamatqulovazimjon19@gmail.com">
          mamatqulovazimjon19@gmail.com
        </a>
      </DetailItem>
    </DetailsContainer>
  );
};

export default ProfileDetails;
