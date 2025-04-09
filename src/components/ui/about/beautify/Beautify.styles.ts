import styled from "@emotion/styled";

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#f0f3f7",
  padding: "60px",
  borderRadius: "10px",
});

export const Content = styled.div({
  width: "50%",
});

export const Title = styled.h2({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const Text = styled.p({
  fontSize: "16px",
  color: "#555",
  marginBottom: "20px",
});

export const Button = styled.button({
  backgroundColor: "#003366",
  color: "white",
  padding: "12px 24px",
  fontSize: "16px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "background 0.3s",
  ":hover": {
    backgroundColor: "#002244",
  },
});

export const ImageWrapper = styled.div({
  position: "relative",
  width: "40%",
  display: "flex",
  justifyContent: "center",
});

export const BackgroundCircle = styled.div({
  position: "absolute",
  width: "120px",
  height: "120px",
  backgroundColor: "#16543a",
  borderRadius: "50%",
  right: "400px",
  bottom: "-60px",
  transform: "translateY(-50%)",
});

export const Image = styled.img({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "15px",
  position: "relative",
  zIndex: 1,
  cursor: "pointer",
});
