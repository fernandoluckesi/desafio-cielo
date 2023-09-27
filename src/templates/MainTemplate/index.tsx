import React from "react";
import { ContentViewContainer, MainContainer } from "./styles";
import { SidebarMenu } from "../../components/SidebarMenu";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <MainContainer>
      <SidebarMenu />
      <ContentViewContainer>{children}</ContentViewContainer>
    </MainContainer>
  );
};
