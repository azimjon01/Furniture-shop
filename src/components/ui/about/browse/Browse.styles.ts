import styled from "@emotion/styled";

export const Section = styled.div({
  textAlign: "center",
  padding: "50px 20px",
});

export const Title = styled.h2({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "8px",
});

export const Description = styled.p({
  fontSize: "16px",
  color: "#777",
  marginBottom: "30px",
});

export const Grid = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
});

export const Card = styled.div({
  width: "280px",
  textAlign: "center",
});

export const ImageWrapper = styled.div({
  borderRadius: "15px",
  overflow: "hidden",
  height: "220px",
});

export const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "15px",
  cursor: "pointer",
});

export const Label = styled.p({
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "12px",
});
