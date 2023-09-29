import styled, { keyframes } from "styled-components";

interface HeaderStylesProps {
  showNavBar?: boolean;
  isExitingNavBar?: boolean;
}

export const MainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.brancoCielo};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 16px;
  width: 100%;

  .header-logo {
    img {
      margin-left: -64px;
      object-fit: cover;
      width: 150px;
    }
  }

  .menu-burger {
    background-color: transparent;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }

  .store-infos {
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    .header-logo {
      display: flex;
      justify-content: center;
      width: 100%;
      order: 1;
      img {
        margin: 0;
      }
    }

    .store-infos {
      order: 2;
    }

    .menu-burger {
      order: 3;
    }
  }
`;

const slideOut = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
`;

const slideIn = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const BackDropNavBar = styled.div<HeaderStylesProps>`
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isExitingNavBar }) => (isExitingNavBar ? "block" : "none")};
  min-height: 100%;
  opacity: ${({ isExitingNavBar }) => (isExitingNavBar ? "1" : "0")};
  position: fixed;
  width: 100%;
  top: 0;
  transition: opacity 0.4s;
  z-index: 1;
`;

export const NavBar = styled.nav<HeaderStylesProps>`
  animation: ${({ showNavBar }) => (showNavBar ? slideIn : slideOut)} 0.3s;
  background-color: ${({ theme }) => theme.colors.primary.brancoCielo};
  display: ${({ isExitingNavBar }) => (isExitingNavBar ? "block" : "none")};
  position: fixed;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  max-height: 60vh;
  padding: 16px 0;
  width: 100%;

  .nav-bar-close-btn {
    background-color: transparent;
    border: none;
    left: 16px;
    outline: none;
    position: absolute;
    top: 16px;

    &:hover {
      cursor: pointer;
    }
  }

  .my-account-item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.nuvem};
    padding-bottom: 16px;
    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.primary.entardecer};
      display: block;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }
  }

  .list-items-links {
    flex-direction: column;
    display: flex;
    overflow-y: auto;
    position: relative;

    max-height: 330px;
  }

  .nav-item-link {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    padding: 12px;
    transition: background-color 0.2s, color 0.2s;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.entardecer};
      color: ${({ theme }) => theme.colors.primary.brancoCielo};
      cursor: pointer;
    }
  }
`;
