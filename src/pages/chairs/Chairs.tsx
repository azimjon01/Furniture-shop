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
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./Chairs.styles";

const Chairs = () => {
  const { chairs, isAdmin, login, logout, updateChair, deleteChair } =
    useChairsStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedChair, setSelectedChair] = useState(null);

  // Edit uchun input state
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState<string | null>(null);
  const [editDescription, setEditDescription] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login(username, password)) {
      setShowLoginModal(false);
      setShowAdminPanel(true);
    } else {
      alert("❌ Xato! Login yoki parol noto‘g‘ri.");
    }
  };

  const openAdminPanel = (chair) => {
    setSelectedChair(chair); // Tanlangan stulni saqlaymiz
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
              <h4>{chair.description}</h4>
              <p>${chair.price.toFixed(2)}</p>
            </Info>
            <Actions>
              <Button
                color="green"
                onClick={() => window.open("/buy", "_blank")}
              >
                🛒 Sotib olish
              </Button>
              <Button color="blue" onClick={() => openAdminPanel(chair)}>
                ⚙️ Boshqarish
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>

      {/* Login Modal */}
      <ModalOverlay open={showLoginModal}>
        <ModalContent>
          <h2>🔑 Login</h2>
          <input
            type="text"
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="green" onClick={handleLogin}>
            Kirish
          </Button>
          <CloseButton onClick={() => setShowLoginModal(false)}>
            ✖ Yopish
          </CloseButton>
        </ModalContent>
      </ModalOverlay>

      {/* Admin Panel */}
      {selectedChair && (
        <ModalOverlay open={showAdminPanel}>
          <ModalContent>
            <h2>🛠 Admin Panel</h2>
            <Card>
              <Image src={selectedChair.image} alt={selectedChair.name} />
              <Info>
                <h3>{selectedChair.name}</h3>
                <h4>{selectedChair.description}</h4>
                <p>${selectedChair.price.toFixed(2)}</p>
              </Info>
              <Button color="orange" onClick={openEditModal}>
                ✏ Edit
              </Button>
              <Button color="red" onClick={() => deleteChair(selectedChair.id)}>
                🗑 Delete
              </Button>
            </Card>
            <CloseButton
              onClick={() => {
                logout();
                setShowAdminPanel(false);
                setSelectedChair(null);
              }}
            >
              🚪 Chiqish
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Modal */}
      {selectedChair && (
        <ModalOverlay open={showEditModal}>
          <ModalContent>
            <h2>✏ Edit Chair</h2>
            <input
              type="text"
              placeholder="Chair Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {editImage && <Image src={editImage} alt="Preview" />}
            <textarea
              placeholder="Description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <Button color="green" onClick={handleSaveChanges}>
              💾 Saqlash
            </Button>
            <CloseButton onClick={() => setShowEditModal(false)}>
              ✖ Yopish
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Chairs;
