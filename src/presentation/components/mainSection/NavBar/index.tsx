import React from 'react';
import {NavBarContainer, Logo, ListStyle} from './styles.js';


const NavBar = () => {
  const LogoIn8 = require('../../../../data/assets/icons/logo-in8-dev.svg').default;

  return (
    <NavBarContainer>
      <Logo
        src={LogoIn8}
      />
      <ListStyle>
        <li
          id='active'
        >
          cadastro
        </li>
        <li>
          lista
        </li>
        <li>
          sobre mim
        </li>
      </ListStyle>
    </NavBarContainer>
  );
};

export default NavBar;