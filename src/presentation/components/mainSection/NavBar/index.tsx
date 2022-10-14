import React from 'react';
import {NavBarContainer, Logo, ListStyle} from './styles.js';


const NavBar = () => {
  const LogoIn8 = require('../../../../data/assets/icons/logo-in8-dev.svg').default;

  return (
    <NavBarContainer id='lol'>
      <Logo
        src={LogoIn8}
      />
      <ListStyle>
        <li
          id='navButton1'
          style={{listStyle: 'none'}
          }>
          cadastro
        </li>
        <li
          id='navButton2'
        >
          lista
        </li>
        <li
          id='navButton3'
        >
          sobre mim
        </li>
      </ListStyle>
    </NavBarContainer>
  );
};

export default NavBar;