import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
});

export const Card = styled.div({
  background: "#fff",
  borderRadius: "8px",
  padding: "15px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
});

export const Image = styled.img({
  // width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px",
});

export const Info = styled.div({
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  "& h3": {
    margin: "5px 0",
    fontSize: "18px",
  },
  "& p": {
    margin: "5px 0",
    fontSize: "14px",
  },
  "& h5": {
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
  padding: "12px",
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

// Add chair form styles
export const AddChairForm = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "20px",
  borderRadius: "8px",
  background: "#fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  margin: "auto",
});

export const Input = styled.div({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",

  "&:focus": {
    borderColor: "#007bff",
    outline: "none",
  },
});

export const AddButton = styled.div({
  padding: "10px 15px",
  background: "#28a745",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background 0.3s ease",

  "&:hover": {
    background: "#218838",
  },
});

export const FileInput = styled.input({
  display: "none", // Ko‘rinmas bo‘lishi uchun
});

export const FileLabel = styled.label({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // width: "100%",
  height: "50px",
  border: "2px dashed #4A90E2",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#4A90E2",
  backgroundColor: "#F5F7FA",
  transition: "all 0.3s ease",
  textAlign: "center",

  "&:hover": {
    backgroundColor: "#E6F0FA",
  },

  "&:active": {
    backgroundColor: "#D0E8FF",
  },
});

// boshqa pasti

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
  position: "relative",
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "500px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
});

export const AdminPanelTitle = styled.h2({
  color: "#000",
});

export const AdminPanelButtons = styled.div({
  display: "flex",
  gap: 20,
  alignItems: "center",
  justifyContent: "space-between",
});

export const CloseButton = styled.button({
  position: "absolute",
  right: 20,
  top: 10,
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
