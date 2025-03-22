import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: 50,
  justifyContent: "center",
  alignItems: "center",
});

const BackHome = styled(Link)({
  position: "absolute",
  top: 50,
  left: 50,
  width: 50,
  height: 50,
  background: "black",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BackHomeLogo = styled.img({
  width: 30,
  height: 30,
  color: "#fff",
  transform: "rotate(180deg)",
  background: "#fff",
  borderRadius: "50%",
  "&:hover": {
    transform: "rotate(180deg) scale(1.2)",
  },
});

export { NotFoundContainer, BackHome, BackHomeLogo };
