import { useCartStore } from "@/components/store/useLikesStore";
import {
  Container,
  Title,
  Item,
  Divider,
  SummaryText,
  Total,
} from "./OrderSummary.styles";

export default function OrderSummary() {
  const { items } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0,
  );
  const shippingCost = 64;
  const tax = 60;
  const total = subtotal + shippingCost + tax;

  return (
    <Container>
      <Title>Your Order</Title>
      {items.length === 0 ? (
        <Item>Your cart is empty.</Item>
      ) : (
        <>
          {items.map((item) => (
            <Item key={item.id}>
              {item.title} - ${item.price.toFixed(2)} x {item.quantity}
            </Item>
          ))}
          <Divider />
          <SummaryText>
            <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
          </SummaryText>
          <SummaryText>
            <span>Shipping:</span> <span>${shippingCost.toFixed(2)}</span>
          </SummaryText>
          <SummaryText>
            <span>Tax:</span> <span>${tax.toFixed(2)}</span>
          </SummaryText>
          <Total>Total: ${total.toFixed(2)}</Total>
        </>
      )}
    </Container>
  );
}
