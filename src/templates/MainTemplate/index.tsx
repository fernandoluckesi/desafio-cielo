import React from "react";
import { ContentViewContainer, MainContainer } from "./styles";

import { Header } from "../../components/Header";
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
