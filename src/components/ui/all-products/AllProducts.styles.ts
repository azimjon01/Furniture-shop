import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "20px",
});

export const Title = styled.h2({
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const ProductsWrapper = styled.div({
  display: "flex",
  background: "red",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
  justifyContent: "center",
  alignItems: "start",
});

export const Category = styled.div({
  background: "#f9f9f9",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
});

export const CategoryTitle = styled.h1({
  fontSize: "22px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

export const Count = styled.span({
  backgroundColor: "#ff6600",
  color: "white",
  fontSize: "14px",
  padding: "4px 10px",
  borderRadius: "12px",
});
