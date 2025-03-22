import styled from "@emotion/styled";

const Card = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  transition: "0.3s",
  "&:hover .overlay": { opacity: 1 },
});

const Image = styled.img({
  position: "relative",
  width: "100%",
  height: "285.39px",
});

const Overlay = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "0.5s ease-in-out",
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
});

const Button = styled.button({
  width: "191.62px",
  height: "45.51px",
  background: "#FFFFFF",
  color: "#E89F71",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});

const InformationContainer = styled.div({
  width: "174.54px",
  height: "22.76px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ShareContainer = styled.div({
  width: "71.15px",
  height: "22.76px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
});

const ShareIcon = styled.img({
  width: "22.76px",
  height: "22.76px",
  cursor: "pointer",
});

const HeartIcon = styled.img({
  width: "22.76px",
  height: "22.76px",
  cursor: "pointer",
});

const HeartContainer = styled.div({
  width: "57.87px",
  height: "22.76px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
});

const ShareText = styled.p({
  width: "40.79px",
  height: "22.76px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "15.17px",
  lineHeight: "150%",
  letterSpacing: "0%",
});

const HeartText = styled.p({
  width: "27.51px",
  height: "22.76px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "15.17px",
  lineHeight: "150%",
  letterSpacing: "0%",
});

const DiscountBadge = styled.span({
  position: "absolute",
  width: "45.52px",
  height: "45.52px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "22.76px",
  right: "22.76px",
  background: "#E97171",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "50%",
  fontSize: "15.17px",
});

const NewBadge = styled.span({
  position: "absolute",
  width: "45.52px",
  height: "45.52px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "22.76px",
  right: "22.76px",
  background: "#2EC1AC",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "50%",
  fontSize: "15.17px",
});

const InformationCard = styled.div({
  width: "100%",
  background: "#F4F5F7",
  paddingTop: "15.17px",
  paddingLeft: "15.17px",
  paddingBottom: "28.44px",
  paddingRight: "140.39px",
});

const Information = styled.div({
  width: "114.78px",
  minHeight: "93.87px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

const Info = styled.div({
  // width: "76.84px",
  // height: "57.84px",
});

const Title = styled.h3({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: "22.76px",
  lineHeight: "120%",
  letterSpacing: "0%",
});

const DescriptionProduct = styled.p({
  color: "#898989",
  fontWeight: 500,
  fontSize: "15.17px",
  lineHeight: "150%",
  letterSpacing: "0%",
});

const Price = styled.div({
  width: "225.77px",
  height: "28.44px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NewPrice = styled.h3({
  color: "#3A3A3A",
  fontWeight: 569.89,
  fontSize: 18.96,
  lineHeight: "150%",
  letterSpacing: "0%",
});

const OldPrice = styled.s({
  color: "#B0B0B0",
  fontWeight: 379.35,
  fontSize: 15.17,
  lineHeight: "150%",
  letterSpacing: "0%",
});

export {
  Button,
  ButtonContainer,
  Card,
  DescriptionProduct,
  DiscountBadge,
  HeartContainer,
  HeartIcon,
  HeartText,
  Image,
  Info,
  Information,
  InformationCard,
  InformationContainer,
  NewBadge,
  NewPrice,
  OldPrice,
  Overlay,
  Price,
  ShareContainer,
  ShareIcon,
  ShareText,
  Title,
};
