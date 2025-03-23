import { ReactNode, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router navigatsiya
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
  links, // Har bir option uchun linklar
}: {
  label: ReactNode;
  options: string[];
  links: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate(); // React Router navigate

  // Modal tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sahifaga o'tish
  const handleNavigate = (link: string) => {
    setIsOpen(false);
    navigate(link); // React Router orqali yo'naltirish
  };

  return (
    <DropdownContainer ref={dropdownRef} onClick={() => setIsOpen(!isOpen)}>
      <Text>{label}</Text>
      <Icon isOpen={isOpen} />
      <DropdownMenu isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => handleNavigate(links[index])}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
