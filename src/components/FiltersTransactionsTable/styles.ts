import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const MainContainer = styled.div`
  background-color: ${theme.colors.primary.brancoCielo};
  border-radius: 5px;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${theme.colors.secondary.nuvem};
  display: flex;
  justify-content: space-between;
  padding: 16px;

  .page-title {
    color: ${theme.colors.primary.chuva};
    font-weight: 500;
    font-size: 24px;
  }

  .show-filters {
    align-items: center;
    background-color: ${theme.colors.secondary.nuvem};
    border: none;
    border-radius: 5px;
    display: flex;
    font-weight: 500;
    gap: 8px;
    padding: 8px 12px;
    transition: filter 0.4s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
    }
  }
`;

export const FiltersContent = styled.div`
  padding: 16px;
`;

export const TriggersFilter = styled.div`
  align-items: flex-start;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ManagerRows = styled.div`
  grid-column: 1;
  flex-grow: 1;

  @media (max-width: 750px) {
    margin-top: 32px;
    width: 100%;
  }
`;

export const FilterRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 8px;
  margin-bottom: 24px;
  padding-right: 48px;
  position: relative;
  top: 0;

  .remove-row-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    padding-right: 32px;
  }
`;

export const TriggersBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  grid-column: 2;
`;
