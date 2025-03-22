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

const Footer = () => {
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
          <Text>📍 Sawojajar Malang, Indonesia</Text>
          <Text>📞 +6289 456 3455</Text>
          <Text>🌐 www.funiro.com</Text>
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
          <EmailForm>
            <EmailInput type="email" placeholder="Enter your email" />
            <SendButton>
              <FiSend />
            </SendButton>
          </EmailForm>
        </Column>
      </FooterContainer>
    </BigContainer>
  );
};

export default Footer;
