import searchIcon from "../../../assets/icons/search-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";

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
  SearchBar,
  SearchIcon,
  SearchInput,
  ToTalIcon,
} from "./Header.styles";
import { Dropdown } from "@/components/ui";
import { useCartStore } from "@/components/store/useLikesStore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

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
        <form onSubmit={handleSearch}>
          <SearchBar>
            <SearchIcon src={searchIcon} alt="Search" />
            <SearchInput
              type="text"
              placeholder="Search for minimalist chair"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </SearchBar>
        </form>
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
          <Avatar src="/assets/images/avatar-image/avatar2.jpg" alt="Profile" />
        </NavLink>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
