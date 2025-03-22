import styled from "@emotion/styled";

export const HeroSection = styled.div({
  height: "400px",
  background:
    'url("/assets/images/funiro-galery/funiro-galery-eight.png") no-repeat center/cover',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
});

export const HeroTitle = styled.h1({
  color: "black",
  fontSize: "42px",
  fontWeight: "bold",
});

export const Section = styled.section({
  maxWidth: "1100px",
  margin: "60px auto",
  textAlign: "center",
  padding: "20px",
});

export const Title = styled.h2({
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const Text = styled.p({
  fontSize: "18px",
  color: "#666",
  lineHeight: "1.6",
});

export const FeaturesGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
  marginTop: "30px",
});

export const Feature = styled.div({
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
});

export const FeatureTitle = styled.h3({
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const TeamGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
  marginTop: "30px",
});

export const TeamMember = styled.div({
  textAlign: "center",
});

export const MemberImage = styled.img({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginBottom: "10px",
});

export const CTASection = styled.div({
  background: "#ff6b6b",
  color: "white",
  textAlign: "center",
  padding: "50px",
  marginTop: "50px",
});

export const Button = styled.div({
  width: "191.62px",
  height: "45.51px",
  background: "#ffffff",
  color: "#e89f71",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "5px",
  transition: "0.3s",
  "&:hover": {
    background: "#e89f71",
    color: "#fff",
  },
});
