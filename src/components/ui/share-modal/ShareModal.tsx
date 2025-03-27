import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
  FaCode,
} from "react-icons/fa6";
import {
  CloseButton,
  CopyButton,
  IconButton,
  LinkContainer,
  ShareIcons,
  ShareModalContainer,
  ShareModalContent,
} from "./ShareModal.styles";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const shareLink = "https://www.example.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <ShareModalContainer>
      <ShareModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h3>Postda ulashish</h3>
        <button
          style={{
            background: "white",
            color: "black",
            borderRadius: 20,
            padding: "5px 15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Post yaratish
        </button>
        <p style={{ fontSize: 12, opacity: 0.7 }}>0 obunachi</p>

        <hr
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            margin: "15px 0",
          }}
        />

        <ShareIcons>
          <IconButton>
            <FaCode color="white" />
          </IconButton>
          <IconButton>
            <FaWhatsapp color="white" />
          </IconButton>
          <IconButton>
            <FaFacebookF color="white" />
          </IconButton>
          <IconButton>
            <FaXTwitter color="white" />
          </IconButton>
          <IconButton>
            <FaEnvelope color="white" />
          </IconButton>
        </ShareIcons>

        <LinkContainer>
          <span style={{ fontSize: 14, overflowWrap: "break-word" }}>
            {shareLink}
          </span>
          <CopyButton onClick={handleCopy}>
            {copied ? "Nusxalandi!" : "Nusxa olish"}
          </CopyButton>
        </LinkContainer>
      </ShareModalContent>
    </ShareModalContainer>
  );
};

export default ShareModal;
