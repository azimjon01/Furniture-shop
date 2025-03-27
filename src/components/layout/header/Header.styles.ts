import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5vh 7vw",
  background: "transparent",
});

export const HeaderWrapperContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 41,
  height: "6vh",
});

export const LinkHome = styled(Link)({
  width: 74,
  height: 29,
  display: "flex",
  alignItems: "center",
});

export const Logo = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const Nav = styled.nav({
  display: "flex",
  alignItems: "center",
  gap: 40,
});

export const PagesButton = styled.button({
  width: 10,
  height: 10,
  background: "red",
});

export const NavLink = styled(Link)({
  position: "relative",
  textDecoration: "none",
  color: "#3A3A3A",
  fontSize: 16,
  fontWeight: 500,
  "&:hover": {
    textDecoration: "underline",
  },
});

export const NavLinkContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
});

export const SearchBar = styled.div({
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: "8px 12px",
  width: "24vw",
  height: "6vh",
});

export const SearchIcon = styled.img({
  width: 20,
  height: 20,
});

export const SearchInput = styled.input({
  color: "#616161",
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: 14,
  marginLeft: 8,
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const Icons = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 32,
});

export const Icon = styled.img({
  width: 24,
  height: 24,
  cursor: "pointer",
});

export const ToTalIcon = styled.span({
  background: "red",
  color: "#fff",
  borderRadius: "50%",
  padding: "5px 10px",
  fontSize: "14px",
  fontWeight: "bold",
  position: "absolute",
  top: "20px",
  right: "-30px",
});

export const Avatar = styled.img({
  width: 40,
  height: 40,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
});
