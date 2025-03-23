import { useState } from "react";
import { Chair, useChairsStore } from "./store";
import {
  Container,
  Grid,
  Card,
  Image,
  Info,
  Actions,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
  AddChairForm,
  Input,
  FileInput,
  AddButton,
  FileLabel,
  AdminPanelTitle,
  AdminPanelButtons,
} from "./Chairs.styles";

const Chairs = () => {
  const { chairs, login, logout, addChair, updateChair, deleteChair } =
    useChairsStore();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedChair, setSelectedChair] = useState<Chair | null>(null);

  // Add form states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [filename, setFileName] = useState<string | null>(null);

  // Edit form states
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState<string | null>(null);
  const [editDescription, setEditDescription] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddChair = () => {
    if (!name || !description || !price || !image) return;
    addChair({
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      image,
    });
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  const handleLogin = () => {
    if (login(username, password)) {
      setShowLoginModal(false);
      setShowAdminPanel(true);
    } else {
      alert("❌ Xato! Login yoki parol noto‘g‘ri.");
    }
  };

  const openAdminPanel = (chair: Chair) => {
    setSelectedChair(chair);
    setShowLoginModal(true);
  };

  const openEditModal = () => {
    if (!selectedChair) return;
    setEditName(selectedChair.name);
    setEditPrice(selectedChair.price.toString());
    setEditImage(selectedChair.image);
    setEditDescription(selectedChair.description || "");
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    if (!selectedChair) return;
    updateChair(selectedChair.id, {
      name: editName,
      price: parseFloat(editPrice),
      image: editImage,
      description: editDescription,
    });
    setShowEditModal(false);
  };

  return (
    <Container>
      <h1>🪑 Chairs Collection</h1>

      <Grid>
        {chairs.map((chair) => (
          <Card key={chair.id}>
            <Image src={chair.image} alt={chair.name} />
            <Info>
              <h3>{chair.name}</h3>
              <p>{chair.description}</p>
              <h5>Price: ${chair.price.toFixed(2)}</h5>
            </Info>
            <Actions>
              <Button
                color="green"
                onClick={() => window.open("/buy", "_blank")}
              >
                🛒 Buy
              </Button>
              <Button color="blue" onClick={() => openAdminPanel(chair)}>
                ⚙️ Manage
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>

      {/* Add chair form */}
      <AddChairForm>
        <Input
          as="input"
          type="text"
          placeholder="Chair Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          as="input"
          type="text"
          placeholder="Chair description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          as="input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FileLabel htmlFor="file-upload">
          {filename ? filename : "Choose a file"}
        </FileLabel>
        <FileInput
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <AddButton as="button" onClick={handleAddChair}>
          Add Chair
        </AddButton>
      </AddChairForm>

      {/* Login Modal */}
      <ModalOverlay open={showLoginModal}>
        <ModalContent>
          <h2>🔑 Login</h2>
          <Input
            as="input"
            type="text"
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            as="input"
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="green" onClick={handleLogin}>
            Kirish
          </Button>
          <CloseButton onClick={() => setShowLoginModal(false)}>✖</CloseButton>
        </ModalContent>
      </ModalOverlay>

      {/* Admin Panel */}
      {selectedChair && (
        <ModalOverlay open={showAdminPanel}>
          <ModalContent>
            <AdminPanelTitle>🛠 Admin Panel</AdminPanelTitle>
            <Card>
              <Image src={selectedChair.image} alt={selectedChair.name} />
              <Info>
                <h3>{selectedChair.name}</h3>
                <p>{selectedChair.description}</p>
                <h5>Price: ${selectedChair.price.toFixed(2)}</h5>
              </Info>
              <AdminPanelButtons>
                <Button color="orange" onClick={openEditModal}>
                  ✏ Edit
                </Button>
                <Button
                  color="red"
                  onClick={() => deleteChair(selectedChair.id)}
                >
                  🗑 Delete
                </Button>
              </AdminPanelButtons>
            </Card>
            <CloseButton
              onClick={() => {
                logout();
                setShowAdminPanel(false);
                setSelectedChair(null);
              }}
            >
              ✖
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Modal */}
      {selectedChair && (
        <ModalOverlay open={showEditModal}>
          <ModalContent>
            <AdminPanelTitle>✏ Edit Chair</AdminPanelTitle>
            {editImage && <Image src={editImage} alt="Preview" />}
            <Input
              as="input"
              type="text"
              placeholder="Description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <Input
              as="input"
              type="text"
              placeholder="Chair Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <Input
              as="input"
              type="number"
              placeholder="Price"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
            <FileLabel htmlFor="file-upload">
              {filename ? filename : "Choose a file"}
            </FileLabel>
            <FileInput
              as="input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button color="green" onClick={handleSaveChanges}>
              💾 Saqlash
            </Button>
            <CloseButton onClick={() => setShowEditModal(false)}>
              ✖
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Chairs;
