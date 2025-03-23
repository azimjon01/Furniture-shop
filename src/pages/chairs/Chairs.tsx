import { useState } from "react";
import { useChairsStore } from "./store";
import {
  Container,
  Grid,
  Card,
  Image,
  Info,
  Actions,
  Button,
  AddChairForm,
} from "./Chairs.styles";

const Chairs = () => {
  const { chairs, addChair, updateChair, deleteChair } = useChairsStore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddChair = () => {
    if (!name || !price || !image) return;
    addChair({ id: Date.now(), name, price: parseFloat(price), image });
    setName("");
    setPrice("");
    setImage(null);
  };

  return (
    <Container>
      <h1>🪑 Chairs Collection</h1>

      <AddChairForm>
        <input
          type="text"
          placeholder="Chair Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleAddChair}>Add Chair</button>
      </AddChairForm>

      <Grid>
        {chairs.map((chair) => (
          <Card key={chair.id}>
            <Image src={chair.image} alt={chair.name} />
            <Info>
              <h3>{chair.name}</h3>
              <p>${chair.price.toFixed(2)}</p>
            </Info>
            <Actions>
              <Button
                color="blue"
                onClick={() => updateChair(chair.id, { name: "Updated Chair" })}
              >
                ✏️ Edit
              </Button>
              <Button color="red" onClick={() => deleteChair(chair.id)}>
                🗑 Delete
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Chairs;
