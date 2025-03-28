import styled from "@emotion/styled";
import { useState } from "react";

const CheckoutContainer = styled.div({
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const Title = styled.h2({
  textAlign: "center",
  marginBottom: "20px",
});

const Input = styled.input({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

const Button = styled.button({
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    background: "#0056b3",
  },
});

export default function Checkout() {
  const [formData, setFormData] = useState({ name: "", card: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Purchase Successful!");
  };

  return (
    <CheckoutContainer>
      <Title>Buy Now</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="card"
          placeholder="Card Number"
          value={formData.card}
          onChange={handleChange}
          required
        />
        <Button type="submit">Pay Now</Button>
      </form>
    </CheckoutContainer>
  );
}
