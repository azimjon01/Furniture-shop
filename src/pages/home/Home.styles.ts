import styled from "@emotion/styled";

export const SHome = {
  Container: styled.div({
    maxWidth: 1200,
    margin: "0 auto",
    padding: "20px",
  }),
  Hero: styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 0",
  }),
  HeroText: styled.div({
    maxWidth: 500,
    "& h1": {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
    },
    "& p": {
      fontSize: 16,
      color: "#555",
    },
  }),
  HeroImage: styled.img({
    width: "50%",
    borderRadius: 10,
  }),
  ProductGrid: styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
    marginTop: 40,
  }),
  ProductCard: styled.div({
    background: "#fff",
    padding: 15,
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    "& img": {
      width: "100%",
      borderRadius: 10,
    },
    "& h3": {
      marginTop: 10,
      fontSize: 18,
    },
    "& p": {
      fontSize: 14,
      color: "#777",
    },
  }),
};
