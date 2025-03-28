import styled from "@emotion/styled";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f3f7;
  padding: 60px;
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #003366;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #002244;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: #16543a;
  border-radius: 50%;
  right: 400px;
  bottom: -60px;
  transform: translateY(-50%);
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;
