import { FiSend } from "react-icons/fi"; // Ikonka uchun
import {
  BigContainer,
  Column,
  EmailForm,
  EmailInput,
  FooterContainer,
  Line,
  Link,
  SendButton,
  Text,
  Title,
} from "./Footer.styles";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  };
  return (
    <BigContainer>
      <Line />
      <FooterContainer>
        <Column>
          <Title>Funiro.</Title>
          <Text>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website.
          </Text>
          <Text>📍 Mamatqulov Azimjon, O'zbekiston</Text>
          <Text>📞 +998 93 100 30 18</Text>
          <Text>🌐 https://github.com/azimjon01</Text>
        </Column>

        <Column>
          <Title>Menu</Title>
          <Link href="#">Products</Link>
          <Link href="#">Rooms</Link>
          <Link href="#">Inspirations</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Terms & Policy</Link>
        </Column>

        <Column>
          <Title>Account</Title>
          <Link href="#">My Account</Link>
          <Link href="#">Checkout</Link>
          <Link href="#">My Cart</Link>
          <Link href="#">My Catalog</Link>
        </Column>

        <Column>
          <Title>Stay Connected</Title>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
        </Column>

        <Column>
          <Title>Stay Updated</Title>
          <EmailForm onSubmit={handleSend}>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SendButton type="submit">
              <FiSend />
            </SendButton>
          </EmailForm>
        </Column>
      </FooterContainer>
    </BigContainer>
  );
};

export default Footer;
