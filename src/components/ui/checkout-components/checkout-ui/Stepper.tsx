import styled from "@emotion/styled";

const StepContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
});

const Step = styled.div<{ active: boolean }>(({ active }) => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: active ? "#ff6600" : "#ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  margin: "0 10px",
}));

export default function Stepper({ step }: { step: number }) {
  return (
    <StepContainer>
      <Step active={step >= 1}>1</Step>
      <Step active={step >= 2}>2</Step>
      <Step active={step >= 3}>3</Step>
    </StepContainer>
  );
}
