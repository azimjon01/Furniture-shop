import styled from "@emotion/styled";

const BigConatiner = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30.35px",
  marginBottom: "41.72px",
});

const Grid = styled.div({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
  gap: "15.35px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  justifyContent: "center",
});

const ProductsTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 700,
  fontSize: 37.97,
  lineHeight: "120%",
  letterSpacing: "0%",
  marginBottom: 0,
});

const ShowMore = styled.button({
  width: "232.41px",
  height: "45.51px",
  border: "1px solid #E89F71",
  padding: "10px 20px",
  cursor: "pointer",
  color: "#E89F71",
  fontWeight: 569.03,
  fontSize: 15.17,
  background: "#fff",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});

export { BigConatiner, Grid, ProductsTitle, ShowMore };
