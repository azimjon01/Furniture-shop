// AboutInspiration styles

import styled from "@emotion/styled";

export const InspirationContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
`;

export const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ImageItem = styled.div`
  width: 30%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
`;
