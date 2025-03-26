import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "20px",
});

export const Title = styled.div({
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const Category = styled.div({
  marginBottom: "30px",
});

export const CategoryTitle = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const Count = styled.div({
  backgroundColor: "#ff6600",
  color: "white",
  fontSize: "16px",
  padding: "4px 10px",
  borderRadius: "12px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
});
