import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brancoCielo};
  height: 100vh;
  min-width: 270px;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px 24px;
  .header-logo {
    margin: 0 auto;
    object-fit: cover;
    width: 150px;
  }
`;

export const StoreInfos = styled.div`
  display: flex;
  justify-content: space-between;
  .name {
    font-weight: 500;
  }

  .cnpj {
    color: ${({ theme }) => theme.colors.primary.chuva};
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;

  .nav-item-link {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 16px;
    outline: none;
    padding: 16px;
    transition: background-color 0.2s, color 0.2s;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.entardecer};
      color: ${({ theme }) => theme.colors.primary.brancoCielo};
      cursor: pointer;
    }
  }

  .active-link {
    background-color: ${({ theme }) => theme.colors.primary.anoitecer};
    color: ${({ theme }) => theme.colors.primary.brancoCielo};
  }
`;

export const NavItem = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 16px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.anoitecer};
    color: ${({ theme }) => theme.colors.primary.brancoCielo};
    cursor: pointer;
  }
`;
