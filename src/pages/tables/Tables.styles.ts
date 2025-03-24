import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "900px",
  margin: "auto",
  textAlign: "center",
  padding: "20px",
});

export const Title = styled.div({
  fontSize: "24px",
  marginBottom: "20px",
  color: "#333",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "20px",
});

export const Card = styled.div({
  background: "white",
  padding: "15px",
  borderRadius: "12px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const Image = styled.img({
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
});

export const Info = styled.div({
  marginTop: "10px",

  h3: {
    fontSize: "18px",
    color: "#222",
    marginBottom: "5px",
  },

  p: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#666",
  },
});

export const Actions = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

export const Button = styled.div<{ color: string }>(({ color }) => ({
  background: color,
  color: "white",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "14px",

  "&:hover": {
    opacity: 0.8,
  },
}));

export const AddTableForm = styled.div({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginTop: "20px",

  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  button: {
    background: "green",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",

    "&:hover": {
      opacity: 0.8,
    },
  },
});
