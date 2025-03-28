import Confirmation from "@/components/ui/checkout-components/checkout-forms/Confirmation";
import DeliveryForm from "@/components/ui/checkout-components/checkout-forms/DeliveryForm";
import PaymentForm from "@/components/ui/checkout-components/checkout-forms/PaymentForm";
import OrderSummary from "@/components/ui/checkout-components/checkout-ui/order-summary/OrderSummary";
import Stepper from "@/components/ui/checkout-components/checkout-ui/Stepper";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "900px",
  margin: "auto",
  padding: "20px",
});

const FormContainer = styled.div({
  width: "60%",
});

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <Stepper step={step} />
      <Container>
        <FormContainer>
          {step === 1 && <DeliveryForm onNext={() => setStep(2)} />}
          {step === 2 && <PaymentForm onNext={() => setStep(3)} />}
          {step === 3 && <Confirmation />}
        </FormContainer>
        <OrderSummary />
      </Container>
    </div>
  );
}
