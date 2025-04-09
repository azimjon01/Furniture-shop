import React from "react";
import styled from "@emotion/styled";
import ProfileCard from "@/components/ui/profil/ProfileCard";

const PageContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f4f4f4",
});

const ProfilePage: React.FC = () => {
  return (
    <PageContainer>
      <ProfileCard />
    </PageContainer>
  );
};

export default ProfilePage;
