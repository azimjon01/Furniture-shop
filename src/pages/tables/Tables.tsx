import { useState } from "react";
import useTablesStore from "./store";
import {
  Container,
  Title,
  Grid,
  Card,
  Image,
  Info,
  Actions,
  Button,
  AddTableForm,
} from "./Tables.styles";

const Tables = () => {
  const { tables, addTable, removeTable, updateTable } = useTablesStore();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (editId !== null) {
      updateTable(editId, name, parseFloat(price));
      setEditId(null);
    } else if (name && price && image) {
      addTable(name, parseFloat(price), image);
    }
    setName("");
    setPrice("");
    setImage(null);
  };

  return (
    <Container>
      <Title>Tables Collection</Title>
      <AddTableForm>
        <input
          type="text"
          placeholder="Table Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button onClick={handleSubmit}>
          {editId !== null ? "Update Table" : "Add Table"}
        </button>
      </AddTableForm>
      <Grid>
        {tables.map((table) => (
          <Card key={table.id}>
            <Image src={table.image} alt={table.name} />
            <Info>
              <h3>{table.name}</h3>
              <p>${table.price.toFixed(2)}</p>
            </Info>
            <Actions>
              <Button
                color="blue"
                onClick={() => {
                  setName(table.name);
                  setPrice(table.price.toString());
                  setEditId(table.id);
                }}
              >
                Edit
              </Button>
              <Button color="red" onClick={() => removeTable(table.id)}>
                Delete
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Tables;
