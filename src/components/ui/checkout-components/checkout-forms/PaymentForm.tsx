import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Input = styled.input({
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
});

const Button = styled.button({
  padding: "10px",
  background: "#ff6600",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});

interface PaymentData {
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export default function PaymentForm({ onNext }: { onNext: () => void }) {
  const { register, handleSubmit } = useForm<PaymentData>();

  const onSubmit = (data: PaymentData) => {
    console.log(data);
    onNext();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("cardNumber")} placeholder="Card Number" required />
      <Input {...register("expiry")} placeholder="MM/YY" required />
      <Input {...register("cvv")} placeholder="CVV" required />
      <Button type="submit">Confirm Payment</Button>
    </Form>
  );
}
