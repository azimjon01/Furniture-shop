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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export default function DeliveryForm({ onNext }: { onNext: () => void }) {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    onNext();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName")} placeholder="First Name" required />
      <Input {...register("lastName")} placeholder="Last Name" required />
      <Input {...register("email")} placeholder="Email Address" required />
      <Input {...register("phone")} placeholder="Phone Number" required />
      <Input {...register("address")} placeholder="Address" required />
      <Button type="submit">Proceed to Payment</Button>
    </Form>
  );
}
