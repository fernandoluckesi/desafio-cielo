import styled from "styled-components";

interface ButtonPropsStyled {
  $backgroundColor: string;
  color?: string;
}

export const MainContainer = styled.button<ButtonPropsStyled>`
  background-color: ${({ $backgroundColor, disabled, theme }) =>
    disabled ? theme.colors.inactive : $backgroundColor};
  border: none;
  border-radius: 5px;
  color: ${({ color }) => (color ? color : "black")};
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding: 10px 16px;
  transition: filter 0.4s;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    filter: ${({ disabled }) => (disabled ? "none" : "brightness(0.7)")};
  }
`;
