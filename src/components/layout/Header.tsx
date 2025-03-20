import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import avatar from "../../assets/images/avatar.png";
import Dropdown from "../ui/Dropdown";

const HeaderWrapper = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5vh 7vw",
  background: "transparent",
});

const HeaderWrapperContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 41,
  height: "6vh",
});

const LinkHome = styled(Link)({
  width: 74,
  height: 29,
  display: "flex",
  alignItems: "center",
});

const Logo = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const Nav = styled.nav({
  display: "flex",
  alignItems: "center",
  gap: 40,
});

const NavLink = styled(Link)({
  textDecoration: "none",
  color: "#3A3A3A",
  fontSize: 16,
  fontWeight: 500,
  "&:hover": {
    textDecoration: "underline",
  },
});

const NavLinkContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
});

const SearchBar = styled.div({
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: "8px 12px",
  width: "33vw",
  height: "6vh",
});

const SearchIcon = styled.img({
  width: 20,
  height: 20,
});

const SearchInput = styled.input({
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

const Icons = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 32,
});

const Icon = styled.img({
  width: 24,
  height: 24,
  cursor: "pointer",
});

const Avatar = styled.img({
  width: 40,
  height: 40,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
});

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrapperContainer>
        <LinkHome to="/">
          <Logo src={"Azimjonning-logosi.svg"} alt="Logo Home" />
        </LinkHome>
        <Nav>
          <NavLinkContainer>
            <Dropdown
              label={<NavLink to="/products">Products</NavLink>}
              options={["Chairs", "Tables", "Sofas"]}
            />
          </NavLinkContainer>
          <NavLinkContainer>
            <Dropdown
              options={["Living Room", "Badroom", "Office"]}
              label={<NavLink to="/rooms">Rooms</NavLink>}
            />
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink to="/inspirations">Inspirations</NavLink>
          </NavLinkContainer>
        </Nav>

        <SearchBar>
          <SearchIcon src={searchIcon} alt="Search" />
          <SearchInput type="text" placeholder="Search for minimalist chair" />
        </SearchBar>
      </HeaderWrapperContainer>

      <Icons>
        <Icon src={heartIcon} alt="Favorites" />
        <Icon src={cartIcon} alt="Cart" />
        <Avatar src={avatar} alt="Profile" />
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
