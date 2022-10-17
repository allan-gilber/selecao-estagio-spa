import React from 'react';
import ScrollBusiness from '../../../../business/scrollBusiness/ScrollBusiness';
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
        <li
          onClick={() => new ScrollBusiness().scrollToToSection(1)}
        >
          lista
        </li>
        <li
          onClick={() => new ScrollBusiness().scrollToToSection(2)}
        >
          sobre mim
        </li>
      </ListStyle>
    </NavBarContainer>
  );
};

export default NavBar;