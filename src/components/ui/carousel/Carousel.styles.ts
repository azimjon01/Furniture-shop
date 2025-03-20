import styled from "@emotion/styled";

export const SliderWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px",
  backgroundColor: "#fdf6f2",
  height: "500px",
  maxWidth: "1360px",
  margin: "auto",
});

export const Content = styled.div({
  flex: 1,
  paddingRight: "40px",
  h2: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  p: {
    fontSize: "16px",
    color: "#666",
  },
});

export const ExploreButton = styled.button({
  background: "#ff7f50",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  marginTop: "20px",
  "&:hover": { opacity: 0.8 },
});

export const SlideContainer = styled.div({
  position: "relative",
  width: "600px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const Slide = styled.div<{ translateX: number }>(({ translateX }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${translateX * 100}%)`,
}));

export const SlideItem = styled.div({
  minWidth: "600px",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  position: "relative",
});

export const SlideText = styled.div({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  // background: "rgba(255, 255, 255, 0.8)",
  // padding: "10px 15px",
  // borderRadius: "5px",
  display: "flex",
});

export const TextContainer = styled.div({
  // background: "blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.8)",
  padding: "10px 20px",
});

export const NavButton = styled.button({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#fff",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  "&:hover": { opacity: 0.8 },
});

export const PrevButton = styled(NavButton)({
  background: "#fff",
  left: "40px",
});

export const NavIcon = styled.img(({ rotate }: { rotate: string }) => ({
  width: "22.76px",
  height: "22.76px",
  color: "#E89F71",
  transform: `rotate(${rotate})`,
}));

export const NextButton = styled(NavButton)({
  background: "#fff",
  right: "40px",
});

export const Pagination = styled.div({
  alignItems: "center",
  margin: "10px auto",
  width: "8.79vw",
  height: "2.99vh",
  gap: 12,
  display: "flex",
});

export const DotContainer = styled.div<{ active: boolean }>(({ active }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 20,
  height: 20,
  border: active ? "1px solid #E89F71" : "",
  borderRadius: "50%",
}));

export const Dot = styled.span<{ active: boolean }>(({ active }) => ({
  width: 8,
  height: 8,
  background: active ? "#E89F71" : "#D8D8D8",
  borderRadius: "100%",
  cursor: "pointer",
  transition: "background 0.3s",
  outline: active ? "1px solid #E89F71" : "none",
}));

export const InformationPriceBox = styled.div({
  display: "flex",
  alignItems: "flex-end",
  width: 23,
  height: "13.02vh",
});

export const InformationCardPrice = styled.h2({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: 19,
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const InformationRight = styled.img({
  width: 25.52,
  height: 25.52,
  cursor: "pointer",
  background: "#E89F71",
  color: "#fff",
});
