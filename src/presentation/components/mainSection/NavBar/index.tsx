import React from 'react';
import {Tabs} from 'antd';
import {NavBarContainer, Logo} from './styles.js';
// import {default as LogoIn8} from '../../../data/assets/icons/a.svg';
// import logoIn8 from '../../../data/assets/icons/logo-in8-dev.svg';


const NavBar = () => {
  // const whitecircle = require('../../../data/assets/images/white-circle.png');
  // const LogoIn8 = require('../../../data/assets/icons/logo-in8-dev.svg').default;
  return (
    <NavBarContainer>
      <Logo
      // src={LogoIn8}
      />
      <Tabs
        className='tabsLayout'
        defaultActiveKey="cadastro"
      >
        <Tabs.TabPane
          tab="cadastro"
          key="cadastro"
        />
        <Tabs.TabPane
          tab="lista"
          key="lista">
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="sobre mim"
          key="sobreMim">
        </Tabs.TabPane>
      </Tabs>
    </NavBarContainer>
  );
};

export default NavBar;