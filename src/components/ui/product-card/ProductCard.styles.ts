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
  height: "200px",
  objectFit: "cover",
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
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "15px",
});

const Button = styled.button({
  padding: "15px 60px",
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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
});

const ShareContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  gap: "7px",
});

const ShareIcon = styled.img({
  cursor: "pointer",
});

const HeartIcon = styled.img({
  cursor: "pointer",
});

const HeartContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "7px",
  cursor: "pointer",
});

const ShareText = styled.p({
  color: "#fff",
  fontWeight: 600,
  fontSize: "15.17px",
  lineHeight: "150%",
  letterSpacing: "0%",
});

const HeartText = styled.p({
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
  height: "100%",
  background: "#F4F5F7",
  padding: "15px",
});

const Information = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

const Info = styled.div({
  // background: "red",
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
  width: "100%",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NewPrice = styled.h3({
  color: "#3A3A3A",
  fontWeight: 569.89,
  fontSize: "18.96px",
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
