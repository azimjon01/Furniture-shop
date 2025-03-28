import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  maxWidth: "400px",
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
});

export const Title = styled.h3({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#333",
});

export const Item = styled.p({
  fontSize: "16px",
  marginBottom: "8px",
  color: "#555",
});

export const Divider = styled.hr({
  border: "none",
  height: "1px",
  background: "#ddd",
  margin: "15px 0",
});

export const SummaryText = styled.p({
  fontSize: "16px",
  fontWeight: "500",
  color: "#222",
  display: "flex",
  justifyContent: "space-between",
});

export const Total = styled.h3({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#e74c3c",
  textAlign: "right",
  marginTop: "10px",
});
