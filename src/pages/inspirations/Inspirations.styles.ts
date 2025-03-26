import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "20px",
});

export const Title = styled.h2({
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "24px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
});

export const Card = styled.div({
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  },
});

export const Image = styled.img({
  width: "100%",
  height: "200px",
  objectFit: "cover",
});

export const Content = styled.div({
  padding: "15px",
});

export const CardTitle = styled.h3({
  margin: "0 0 10px",
  fontSize: "18px",
});

export const Description = styled.p({
  fontSize: "14px",
  color: "#555",
});
