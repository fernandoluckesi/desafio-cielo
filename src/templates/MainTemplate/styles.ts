import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  min-height: 100vh;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ContentViewContainer = styled.div`
  padding: 24px;
  margin-left: 270px;
  width: 100%;

  @media (max-width: 1200px) {
    margin: 0;
    padding: 0;
  }
`;
