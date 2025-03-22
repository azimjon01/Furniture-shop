import searchIcon from "../../../assets/icons/search-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import avatar from "../../../assets/images/avatar.png";

import {
  Avatar,
  HeaderWrapper,
  HeaderWrapperContainer,
  Icon,
  Icons,
  LinkHome,
  Logo,
  Nav,
  NavLink,
  NavLinkContainer,
  PagesButton,
  SearchBar,
  SearchIcon,
  SearchInput,
} from "./Header.styles";
import { Dropdown } from "@/components/ui";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrapperContainer>
        <LinkHome to="/">
          <Logo src={"/assets/logo/Azimjonning-logosi.svg"} alt="Logo Home" />
        </LinkHome>
        <Nav>
          <NavLinkContainer>
            <NavLink to="/about">About</NavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink to="/shop">Shop</NavLink>
          </NavLinkContainer>
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
