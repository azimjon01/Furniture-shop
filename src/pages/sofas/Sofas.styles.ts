import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1200px",
  margin: "auto",
  padding: "24px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "24px",
});

export const Card = styled.div({
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
  },
});

export const Image = styled.img({
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "10px",
});

export const Info = styled.div({
  marginTop: "12px",
  textAlign: "center",
  h3: {
    fontSize: "20px",
    fontWeight: "600",
  },
  p: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#28a745",
  },
});

export const Actions = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "12px",
});

export const Button = styled.button<{ color: string }>(({ color }) => ({
  background: color,
  color: "#fff",
  fontSize: "14px",
  border: "none",
  padding: "10px 16px",
  cursor: "pointer",
  borderRadius: "6px",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  "&:hover": {
    opacity: 0.85,
    transform: "scale(1.05)",
  },
}));

export const AddSofaForm = styled.div({
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "24px",
  padding: "16px",
  background: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  button: {
    background: "#28a745",
    color: "#fff",
    fontSize: "14px",
    border: "none",
    padding: "10px 16px",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 0.85,
    },
  },
});
