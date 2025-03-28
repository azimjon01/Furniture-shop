import styled from "@emotion/styled";

export const HeroContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background:
    'url("/assets/images/about/hero-background.png") center/cover no-repeat',
  height: "80vh",
  padding: "2rem",
});

export const HeroContent = styled.div({
  background: "#DFE9F4",
  padding: "1.5rem",
  borderRadius: "12px",
  maxWidth: "380px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
});

export const Title = styled.h1({
  fontSize: "1.8rem",
  fontWeight: "bold",
  margin: "0.5rem 0",
  color: "#054C73",
});

export const Subtitle = styled.p({
  fontSize: "1rem",
  color: "#555",
  lineHeight: "1.5",
});

export const Button = styled.button({
  backgroundColor: "#004080",
  color: "white",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "1rem",
  transition: "background 0.3s",
  ":hover": {
    backgroundColor: "#003366",
  },
});

// AboutFeature styles

export const FeatureContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  background: "#f4f6f8",
  padding: "20px 40px",
  borderRadius: "10px",
  marginTop: "50px",
});

export const FeatureItemWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flex: 1,
  textAlign: "center",
});

export const IconWrapper = styled.div({
  cursor: "pointer",
  fontSize: "24px",
});

export const FeatureText = styled.div({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
});

export const FeatureTitle = styled.h3({
  fontSize: "16px",
  fontWeight: "bold",
  margin: 0,
});

export const FeatureDescription = styled.p({
  fontSize: "14px",
  color: "#555",
  margin: 0,
});
