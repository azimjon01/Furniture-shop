import styled from "@emotion/styled";

export const InspirationContainer = styled.div({
  textAlign: "center",
  padding: "40px 20px",
});

export const Title = styled.h2({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const Subtitle = styled.p({
  fontSize: "16px",
  color: "#555",
  marginBottom: "30px",
});

export const ImageGrid = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
});

export const ImageItem = styled.div({
  width: "30%",
  borderRadius: "10px",
  overflow: "hidden",
  cursor: "pointer",
  img: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "10px",
  },
});
