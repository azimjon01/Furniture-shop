import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "30.35px",
  justifyContent: "space-between",
  textAlign: "center",
  padding: "0 13px",
  marginBottom: "41.72px",
});

export const Title = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
});

export const SliderWrapper = styled.div({
  display: "flex",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  margin: "0 auto",
});

export const Slide = styled.div({
  display: "flex",
  gap: "18.02px",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "transform 0.5s ease-in-out",
});

export const Card = styled.div({
  width: 369,
  height: 350.81,
  background: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
});

export const Image = styled.img({
  width: "370.91px",
  height: "237.99px",
  objectFit: "cover",
});

export const Content = styled.div({
  display: "flex",
  height: "100px",
  borderRadius: "10px",
  flexDirection: "column",
  justifyContent: "center",
  padding: "15px",
});

export const CardTitle = styled.div({
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "5px",
});

export const DateText = styled.div({
  fontSize: "12px",
  color: "gray",
});

export const ArrowButton = styled.button({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
  "&:hover": {
    background: "#f0f0f0",
  },
});

export const PrevButton = styled(ArrowButton)({
  left: "5px",
});

export const NextButton = styled(ArrowButton)({
  right: "5px",
});

export const DotsContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "15px",
});

export const Dot = styled.button<{ active: boolean }>(({ active }) => ({
  width: "10px",
  height: "10px",
  margin: "0 5px",
  borderRadius: "50%",
  background: active ? "#ff6b6b" : "#ccc",
  border: "none",
  cursor: "pointer",
}));
