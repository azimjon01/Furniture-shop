import styled from "@emotion/styled";

const FooterWrapper = styled.footer({
  textAlign: "center",
  padding: 16,
  background: "#222",
  color: "#fff",
  fontSize: 14,
});

const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
