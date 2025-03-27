import React from "react";
import styled from "@emotion/styled";
import Avatar from "./Avatar";
import { useProfileStore } from "@/components/store/useLikesStore";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 20px;
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Username = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

const Bio = styled.p`
  font-size: 14px;
  max-width: 300px;
  text-align: center;
`;

const FollowButton = styled.button<{ isFollowing: boolean }>`
  background-color: ${(props) => (props.isFollowing ? "#ddd" : "blue")};
  color: ${(props) => (props.isFollowing ? "black" : "white")};
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const ProfileHeader: React.FC = () => {
  const { name, username, bio, avatar, isFollowing, toggleFollow } =
    useProfileStore();

  return (
    <HeaderContainer>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <Username>{username}</Username>
      <Bio>{bio}</Bio>
      <FollowButton isFollowing={isFollowing} onClick={toggleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </FollowButton>
    </HeaderContainer>
  );
};

export default ProfileHeader;
