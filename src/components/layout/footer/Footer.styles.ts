import styled from "@emotion/styled";

const BigContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const FooterContainer = styled.footer({
  gap: "10px",
  padding: "40px 20px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
});

const Column = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  minWidth: "150px",
  marginBottom: "20px",
});

const Title = styled.h3({
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "15px",
});

const Text = styled.p({
  fontSize: "14px",
  color: "#666",
  lineHeight: 1.5,
});

const Link = styled.a({
  display: "block",
  fontSize: "14px",
  color: "#333",
  textDecoration: "none",
  marginBottom: "8px",
  ":hover": {
    color: "#ff6b6b",
  },
});

const EmailForm = styled.form({
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "5px",
  overflow: "hidden",
  width: "240px",
});

const EmailInput = styled.input({
  flex: 1,
  padding: "10px",
  border: "none",
  outline: "none",
});

const SendButton = styled.button({
  background: "#e89f71",
  border: "none",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "white",
});

const Line = styled.hr({
  width: "86%",
  margin: "0 auto",
  background: "#D8D8D8",
});

export {
  BigContainer,
  FooterContainer,
  Column,
  Title,
  Text,
  Link,
  EmailForm,
  EmailInput,
  SendButton,
  Line,
};
