import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  min-height: 100vh;
`;

export const ContentViewContainer = styled.div`
  padding: 24px;
`;
