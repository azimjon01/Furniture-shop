import styled from "@emotion/styled";

export const ShareModalContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const ShareModalContent = styled.div({
  background: "#222",
  padding: 20,
  borderRadius: 10,
  width: 400,
  textAlign: "center",
  position: "relative",
  color: "white",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
});

export const CloseButton = styled.button({
  position: "absolute",
  top: 10,
  right: 15,
  background: "none",
  border: "none",
  fontSize: 20,
  cursor: "pointer",
  color: "white",
});

export const ShareIcons = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: 15,
  margin: "20px 0",
});

export const IconButton = styled.button({
  background: "rgba(255, 255, 255, 0.1)",
  border: "none",
  padding: 10,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)",
  },
});

export const LinkContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#333",
  padding: "10px 15px",
  borderRadius: 5,
  marginTop: 15,
});

export const CopyButton = styled.button({
  background: "#007bff",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: 5,
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    background: "#0056b3",
  },
});
