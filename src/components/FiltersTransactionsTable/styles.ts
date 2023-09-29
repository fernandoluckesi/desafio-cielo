import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brancoCielo};
  //background-color: red;
  border-radius: 5px;
  margin-bottom: 24px;
  //padding: 16px;
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.nuvem};
  display: flex;
  gap: 128px;

  padding: 16px;

  .page-title {
    font-weight: 600;
    font-size: 24px;
  }

  .show-filters {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary.anoitecer};
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
`;

export const ManagerRows = styled.div`
  grid-column: 1;
  flex-grow: 1;
  margin-top: -40px;
`;

export const FilterRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
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
`;

export const TriggersBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  grid-column: 2;
`;

export const InputSearchById = styled.input``;

export const ButtonSearchById = styled.button``;

export const FiltersContainer = styled.div``;

export const FilterItem = styled.div``;

export const FilterName = styled.select``;

export const FilterValue = styled.select``;
