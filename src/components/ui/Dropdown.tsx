import { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { FiChevronDown } from "react-icons/fi";

const DropdownContainer = styled.div({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
});

const Text = styled.span({
  fontSize: 16,
  fontWeight: 500,
  color: "#3A3A3A",
  lineHeight: "150%",
  letterSpacing: "0%",
});

const Icon = styled(FiChevronDown, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  width: 20,
  height: 20,
  transition: "transform 0.3 ease",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
}));

const DropdownMenu = styled("ul", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: 120,
  background: "#fff",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  borderRadius: 4,
  padding: "8px 0",
  listStyle: "none",
  display: isOpen ? "block" : "none",
  zIndex: 2,
}));

const DropdownItem = styled.li({
  padding: "8px 12px",
  fontSize: 14,
  color: "#333",
  cursor: "pointer",
  "&:hover": {
    background: "#f5f5f5",
  },
});

const Dropdown = ({
  label,
  options,
}: {
  label: ReactNode;
  options: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <Text>{label}</Text>
      <Icon isOpen={isOpen} />
      <DropdownMenu isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index}>{option}</DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
