import React from "react";
import styled from "@emotion/styled";
import { useProfileStore } from "@/components/store/useLikesStore";

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const StatBox = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
`;

const ProfileStats: React.FC = () => {
  const { posts, followers, following } = useProfileStore();

  return (
    <StatsContainer>
      <StatBox>
        <StatNumber>{posts}</StatNumber>
        <StatLabel>Posts</StatLabel>
      </StatBox>
      <StatBox>
        <StatNumber>{followers}</StatNumber>
        <StatLabel>Followers</StatLabel>
      </StatBox>
      <StatBox>
        <StatNumber>{following}</StatNumber>
        <StatLabel>Following</StatLabel>
      </StatBox>
    </StatsContainer>
  );
};

export default ProfileStats;
