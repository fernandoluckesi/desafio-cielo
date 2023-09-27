import styled from "styled-components";

export const RequestErrorMsg = styled.p`
  font-size: 24px;
  margin-top: 30vh;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
`;

export const NavigationTable = styled.div`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
`;

export const TotalQuantityInfo = styled.p`
  font-size: 14px;
`;

export const Pagination = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  .current-page {
  }

  .btn-nav-page {
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
`;
