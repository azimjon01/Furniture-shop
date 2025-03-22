import styled from "@emotion/styled";

export const SliderContainer = styled.div({
  position: "relative",
  height: "80vh",
  marginTop: "3.59vh",
  overflow: "hidden",
});

export const ShopNowCard = styled.div({
  position: "absolute",
  display: "flex",
  width: "33.68vw",
  height: "71.48vh",
  background: "#fff",
  zIndex: 1,
  top: "-10px",
  left: 95,
  justifyContent: "center",
  alignItems: "center",
});

export const ShopNow = styled.div({
  width: "27.38vw",
  height: "56.38vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ShopNowTitle = styled.h1({
  // width: "27.38vw",
  // height: "26.17vh",
  fontWeight: 700,
  fontSize: 50,
  lineHeight: "120%",
  letterSpacing: "0%",
  color: "#3A3A3A",
});

export const ShopNowText = styled.p({
  // width: "26.13vw",
  // height: "11.72vh",
  marginTop: "16px",
  marginRight: "17px",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const ShopNowButton = styled.button({
  width: "27.37vw",
  height: "10.16vh",
  marginTop: "6.25vh",
  fontWeight: 600,
  fontSize: 18,
  border: "none",
  lineHeight: "150%",
  letterSpacing: "0%",
  background: "#E89F71",
  color: "#fff",
  cursor: "pointer",
});

export const InformationCard = styled.div({
  position: "absolute",
  bottom: "5.21vh",
  right: "6.88vw",
  // width: "21.52vw",
  // height: "19.27vh",
  color: "#FFFFFFB8",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 3,
  background: "#FFFFFFB8",
  padding: 23,
  cursor: "pointer",
});

export const InformationCardInformation = styled.div({
  // width: "12.08vw",
  // height: "13.02vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

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
  width: 23,
  height: 23,
  cursor: "pointer",
});

export const InformationCardTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: 27,
  lineHeight: "120%",
  letterSpacing: "0%",
});

export const InformationCardText = styled.p({
  color: "#616161",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const SliderWrapper = styled.div({
  position: "absolute",
  width: "100%",
  bottom: 0,
  right: "4.88vw",
  maxWidth: "65vw",
  height: "71vh",
  gap: 10,
  overflow: "hidden",
  borderRadius: 10,
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
});

export const SlidesContainer = styled.div<{ index: number }>(({ index }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${index * 100}%)`,
}));

export const Slide = styled.div({
  minWidth: "100%",
  height: "100%",
});

export const SlideImage = styled.img({
  width: "886px",
  height: "524.33px",
  marginLeft: "282px",
  objectFit: "cover",
});

export const Buttons = styled.div({
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  right: "4.88vw",
  width: "7.61vw",
  height: "4.69vh",
});

export const Button = styled.button({
  width: 46,
  height: 46,
  border: "none",
  cursor: "pointer",
  borderRadius: "50%",
  "&:hover": {
    background: "",
  },
});

export const PrevButton = styled(Button)({
  background: "#E89F7150",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const NextButton = styled(Button)({
  background: "#E89F7150",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PrevNextIcon = styled.img({
  width: 24,
  height: 24,
});

export const Pagination = styled.div({
  position: "absolute",
  width: "8.79vw",
  height: "2.99vh",
  gap: 12,
  marginLeft: "45.83vw",
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
