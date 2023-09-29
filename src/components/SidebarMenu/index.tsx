import React from "react";
import { Footer, Header, MainContainer, NavBar, StoreInfos } from "./styles";
import logoCieloCinzaAzulCielo from "../../assets/images/logo-cielo-cinza-azul-cielo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import { ListMenu } from "../ListMenu";
import { options } from "../../mocks/listMenu";
import { AccountMenu } from "../AccountMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { menuNavItems } from "../../utils/menuList";

export const SidebarMenu: React.FC = () => {
  const location = useLocation();

  return (
    <MainContainer>
      <Header>
        <img
          src={logoCieloCinzaAzulCielo}
          className="header-logo"
          alt="Logo Cielo nas cores cinza e azul"
        />

        <StoreInfos>
          <ListMenu options={options} />
          <KeyboardArrowDownIcon
            sx={{ position: "absolute", top: 18, right: 0 }}
          />
        </StoreInfos>
      </Header>
      <NavBar>
        {menuNavItems.map((navItem) => {
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
      <Footer>
        <AccountMenu />{" "}
      </Footer>
    </MainContainer>
  );
};
