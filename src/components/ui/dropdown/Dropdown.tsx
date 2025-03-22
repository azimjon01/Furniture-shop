import { ReactNode, useState } from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  Icon,
  Text,
} from "./Dropdown.styles";

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
