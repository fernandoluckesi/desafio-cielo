import React from "react";
import { MainContainer } from "./styles";

interface ButtonDefaultProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
  color?: string;
  disabled?: boolean;
  text: string;
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  backgroundColor,
  color,
  disabled,
  text,
  ...props
}) => {
  return (
    <MainContainer
      disabled={disabled}
      $backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      {text}
    </MainContainer>
  );
};
