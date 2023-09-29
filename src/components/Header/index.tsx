import React, { useState } from "react";
import { BackDropNavBar, MainContainer, NavBar } from "./styles";
import logoCieloCinzaAzulCielo from "../../assets/images/logo-cielo-cinza-azul-cielo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import { ListMenu } from "../ListMenu";
import { options } from "../../mocks/listMenu";
import { AccountMenu } from "../AccountMenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuNavItems } from "../../utils/menuList";

export const Header: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [isExitingNavBar, setIsExitingNavBar] = useState<boolean>(false);

  const handleToggleNavBar = () => {
    if (showNavBar) {
      const timeout = setTimeout(() => {
        setIsExitingNavBar(false);
      }, 200);

      setShowNavBar(false);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsExitingNavBar(true);
      setShowNavBar(!showNavBar);
    }
  };

  const handleOutModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggleNavBar();
    }
  };
  return (
    <MainContainer>
      <div className="store-infos">
        <ListMenu options={options} />
        <KeyboardArrowDownIcon
          sx={{ position: "absolute", top: 18, right: 0 }}
        />
      </div>
      <div className="header-logo">
        <img
          src={logoCieloCinzaAzulCielo}
          alt="Logo Cielo nas cores cinza e azul"
        />
      </div>

      <button onClick={handleToggleNavBar} className="menu-burger">
        <MenuIcon />{" "}
      </button>
      <BackDropNavBar
        isExitingNavBar={isExitingNavBar}
        onClick={(e) => handleOutModalClick(e)}
      >
        <NavBar showNavBar={showNavBar} isExitingNavBar={isExitingNavBar}>
          <button onClick={handleToggleNavBar} className="nav-bar-close-btn">
            <CloseIcon />
          </button>
          <div className="my-account-item">
            <Link to="/minha-conta">MINHA CONTA</Link>
          </div>
          <div className="list-items-links">
            {menuNavItems.map((navItem) => {
              return (
                <Link
                  to={navItem.route}
                  key={navItem.name}
                  className="nav-item-link"
                >
                  {navItem.text}
                </Link>
              );
            })}
          </div>
        </NavBar>
      </BackDropNavBar>
    </MainContainer>
  );
};
