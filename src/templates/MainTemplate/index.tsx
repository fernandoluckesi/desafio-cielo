import React from "react";
import { ContentViewContainer, MainContainer } from "./styles";
import { SidebarMenu } from "../../components/SidebarMenu";
import { Header } from "../../components/Header";
import { useMedia } from "../../hooks/useMedia";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const { widthScreen } = useMedia();

  return (
    <MainContainer>
      {widthScreen > 1200 ? <SidebarMenu /> : <Header />}
      <ContentViewContainer>{children}</ContentViewContainer>
    </MainContainer>
  );
};
