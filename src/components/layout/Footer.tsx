import styled from "@emotion/styled";
import { FiSend } from "react-icons/fi"; // Ikonka uchun

const BigContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const FooterContainer = styled.footer`
  // background: #f8f8f8;
  gap: 10px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 150px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const Link = styled.a`
  display: block;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    color: #ff6b6b;
  }
`;

const EmailForm = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  width: 240px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  background: #e89f71;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

const Line = styled.hr({
  width: "86%",
  margin: "0 auto",
  background: "#D8D8D8",
});

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
