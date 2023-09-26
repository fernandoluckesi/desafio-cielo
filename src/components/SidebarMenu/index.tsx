import React, { useState } from "react";
import { Header, MainContainer, NavBar, NavItem, StoreInfos } from "./styles";
import logoCieloCinzaAzulCielo from "../../assets/images/logo-cielo-cinza-azul-cielo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import { ListMenu } from "../ListMenu";

export const SidebarMenu: React.FC = () => {
  const location = useLocation();
  console.log({ location });

  const MenuNavItems = [
    {
      name: "sales",
      text: "VENDAS",
      route: "/sales",
    },
    {
      name: "statisticalCharts",
      text: "GRÁFICOS ESTATÍSTICOS",
      route: "/statistical-charts",
    },
  ];

  return (
    <MainContainer>
      <Header>
        <img src={logoCieloCinzaAzulCielo} className="header-logo" />
        <StoreInfos>
          <div>
            <p className="name">Pocket Med LTDA</p>
            <p className="cnpj">95.390.039/0001-79</p>
          </div>
          <KeyboardArrowDownIcon />
        </StoreInfos>
        <ListMenu />
      </Header>
      <NavBar>
        {MenuNavItems.map((navItem) => {
          return (
            <Link
              to={navItem.route}
              key={navItem.name}
              className={
                location.pathname === navItem.route
                  ? "nav-item-link active-link"
                  : "nav-item-link"
              }
            >
              {" "}
              {navItem.text}{" "}
            </Link>
          );
        })}
      </NavBar>
    </MainContainer>
  );
};
