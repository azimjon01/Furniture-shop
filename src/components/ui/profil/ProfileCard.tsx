import React from "react";
import styled from "@emotion/styled";
import ProfileHeader from "./ProfilHeader";
import ProfileStats from "./ProfilStats";
import ProfileDetails from "./ProfilDetails";

const CardContainer = styled.div({
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
});

const ProfileCard: React.FC = () => {
  return (
    <CardContainer>
      <ProfileHeader />
      <ProfileStats />
      <ProfileDetails />
    </CardContainer>
  );
};

export default ProfileCard;
