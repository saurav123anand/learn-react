import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    background-color: ${({ filled, bg }) => (filled ? bg : '#fff')};
  color: ${({ filled, color }) => (filled ? color : '#000')};
  border: ${({ filled }) => (filled ? 'none' : '1px solid #000')};
`;
