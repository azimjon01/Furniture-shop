import styled from "@emotion/styled";

export const Section = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 30px;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  width: 280px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  height: 220px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
`;
