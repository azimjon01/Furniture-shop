import styled from "@emotion/styled";

const LayoutWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  backgroundColor: "#FCF8F3",
});

const MainContent = styled.main({
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

export { LayoutWrapper, MainContent };
