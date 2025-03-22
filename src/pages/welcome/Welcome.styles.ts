import styled from "@emotion/styled";

const WelcomePageContainer = styled.div({
  position: "relative",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  background: "#FCF8F3",
});

const WelcomePageCard = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "67vw",
  height: "100vh",
  background: "#F9F1E7",
});

export { WelcomePageContainer, WelcomePageCard };
