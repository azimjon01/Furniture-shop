import searchIcon from "../../../assets/icons/search-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import avatar from "../../../assets/images/avatar.png";

import {
  Avatar,
  CartLink,
  HeaderWrapper,
  HeaderWrapperContainer,
  Icon,
  Icons,
  LinkHome,
  Logo,
  Nav,
  NavLink,
  NavLinkContainer,
  SearchBar,
  SearchIcon,
  SearchInput,
  ToTalIcon,
} from "./Header.styles";
import { Dropdown } from "@/components/ui";
import { useCartStore } from "@/components/store/useLikesStore";

const Header = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
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
              label="Products"
              options={["Chairs", "Tables", "Sofas"]}
              links={["/chairs", "/tables", "/sofas"]}
            />
          </NavLinkContainer>
          <NavLinkContainer>
            <Dropdown
              label="Rooms"
              options={["Living Room", "Badroom", "Office"]}
              links={["/livingroom", "/badroom", "/office"]}
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
        <NavLink to="/likes">
          <Icon src={heartIcon} alt="Favorites" />
        </NavLink>
        <NavLink to="/products">
          <Icon src={cartIcon} alt="Cart" />
          {totalItems > 0 && <ToTalIcon>+{totalItems}</ToTalIcon>}
        </NavLink>
        <NavLink to="/profile">
          <Avatar src={avatar} alt="Profile" />
        </NavLink>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
