import React from "react";
import styled from "@emotion/styled";
import Avatar from "./Avatar";
import { useProfileStore } from "@/components/store/useLikesStore";

const HeaderContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
  padding: "20px",
});

const Name = styled.h2({
  fontSize: "20px",
  margin: 0,
});

const Username = styled.p({
  fontSize: "14px",
  color: "gray",
  margin: 0,
});

const Bio = styled.p({
  fontSize: "14px",
  maxWidth: "300px",
  textAlign: "center",
});

const FollowButton = styled.button<{ isFollowing: boolean }>(
  ({ isFollowing }) => ({
    backgroundColor: isFollowing ? "#ddd" : "blue",
    color: isFollowing ? "black" : "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  }),
);

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
