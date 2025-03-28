import styled from "@emotion/styled";

const Container = styled.div({
  textAlign: "center",
});

export default function Confirmation() {
  return (
    <Container>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been placed successfully.</p>
      <img
        style={{ width: 100, height: 100, marginTop: 30 }}
        src="/assets/images/checkout/succesfully-one.png"
        alt="Succesfully images"
      />
    </Container>
  );
}
