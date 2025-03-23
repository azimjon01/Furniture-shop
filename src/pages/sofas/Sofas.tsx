import { useState } from "react";
import { useSofasStore } from "./store";
import {
  Container,
  Grid,
  Card,
  Image,
  Info,
  Actions,
  Button,
  AddSofaForm,
} from "./Sofas.styles";

const Sofas = () => {
  const { sofas, addSofa, updateSofa, deleteSofa } = useSofasStore();
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

  const handleAddSofa = () => {
    if (!name || !price || !image) return;
    addSofa({ id: Date.now(), name, price: parseFloat(price), image });
    setName("");
    setPrice("");
    setImage(null);
  };

  return (
    <Container>
      <h1>🛋 Sofas Collection</h1>

      <AddSofaForm>
        <input
          type="text"
          placeholder="Sofa Name"
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
        <button onClick={handleAddSofa}>Add Sofa</button>
      </AddSofaForm>

      <Grid>
        {sofas.map((sofa) => (
          <Card key={sofa.id}>
            <Image src={sofa.image} alt={sofa.name} />
            <Info>
              <h3>{sofa.name}</h3>
              <p>${sofa.price.toFixed(2)}</p>
            </Info>
            <Actions>
              <Button
                color="blue"
                onClick={() => updateSofa(sofa.id, { name: "Updated Sofa" })}
              >
                ✏️ Edit
              </Button>
              <Button color="red" onClick={() => deleteSofa(sofa.id)}>
                🗑 Delete
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Sofas;
