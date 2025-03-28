import styled from "@emotion/styled";

export const ButtonsContainer = styled.div({
  display: "flex",
  gap: 20,
});

export const Button = styled.button({
  width: 100,
  padding: "10px 15px",
  cursor: "pointer",
  background: "#E89F71",
  color: "white",
  fontWeight: "bold",
  border: "1px solid #E89F71",
  "&:hover": {
    background: "#fff",
    color: "#E89F71",
  },
});

export const RemoveButton = styled.button({
  position: "absolute",
  background: "#fff",
  border: "none",
  color: "#E89F71",
  bottom: 20,
  padding: "10px 15px",
  cursor: "pointer",
  "&:hover": {
    background: "red",
    color: "#fff",
  },
});

export const TotalContainer = styled.div({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  background: "#fff",
  padding: "10px 16px",
});

export const Total = styled.h3({
  fontSize: "30px",
  margin: 0,
});

export const CounterButton = styled.button({
  padding: "5px 20px",
  fontSize: "18px",
  border: "none",
  borderRadius: "5px",
  background: "#E89F71",
  color: "#fff",
  cursor: "pointer",
  "&:hover": {
    background: "#d87e5a",
  },
});

export const BigContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",
  marginBottom: "40px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "15px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const ProductsTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 700,
  fontSize: "38px",
  marginBottom: 0,
});

export const ShowMore = styled.button({
  width: "230px",
  height: "45px",
  border: "1px solid #E89F71",
  padding: "10px 20px",
  cursor: "pointer",
  color: "#E89F71",
  fontWeight: "bold",
  fontSize: "15px",
  background: "#fff",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});
