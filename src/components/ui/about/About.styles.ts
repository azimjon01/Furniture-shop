import styled from "@emotion/styled";

export const HeroSection = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
  background: "aqua",
  color: "#fff",
  textAlign: "center",
  cursor: "pointer",
});

export const HeroTitle = styled.h1({
  fontSize: "3rem",
  fontWeight: "bold",
});

export const HeroSubtext = styled.p({
  fontSize: "1.5rem",
  marginTop: "0.5rem",
});

export const Section = styled.div({
  padding: "4rem 2rem",
  textAlign: "center",
});

export const MissionText = styled.p({
  fontSize: "1.5rem",
  fontWeight: "bold",
  maxWidth: "600px",
  margin: "0 auto",
  span: {
    color: "#ff3300",
  },
});

export const FeaturesGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
});

export const FeatureCard = styled.div({
  padding: "2rem",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #f5f5f5, #ddd)",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  cursor: "pointer",
});

export const FeatureIcon = styled.div({
  fontSize: "3rem",
  marginBottom: "1rem",
});

export const FeatureText = styled.p({
  fontSize: "1.2rem",
});

export const TeamGrid = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
});

export const TeamMember = styled.div({
  textAlign: "center",
  transition: "transform 0.3s",
  ":hover": {
    transform: "scale(1.1)",
  },
  cursor: "pointer",
});

export const MemberImage = styled.img({
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const MemberName = styled.p({
  marginTop: "0.5rem",
  fontWeight: "bold",
});

export const CTASection = styled.div({
  textAlign: "center",
  padding: "3rem 1rem",
  backgroundColor: "#222",
  color: "#fff",
});

export const CTAButton = styled.button({
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  background: "#ff3300",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});
