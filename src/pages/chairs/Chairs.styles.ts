import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
});

export const Card = styled.div({
  background: "#fff",
  borderRadius: "8px",
  padding: "15px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

export const Image = styled.img({
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px",
});

export const Info = styled.div({
  marginTop: "10px",
  "& h3": {
    margin: "5px 0",
    fontSize: "18px",
  },
  "& p": {
    fontSize: "16px",
    color: "#555",
  },
});

export const Actions = styled.div({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
});

export const Button = styled.button<{ color?: string }>(({ color }) => ({
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "0.3s",
  background: color || "#3498db",
  color: "#fff",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const ModalOverlay = styled.div<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: open ? "flex" : "none",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}));

export const ModalContent = styled.div({
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "400px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

export const CloseButton = styled.button({
  marginTop: "10px",
  background: "#e74c3c",
  color: "#fff",
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    opacity: 0.8,
  },
});
