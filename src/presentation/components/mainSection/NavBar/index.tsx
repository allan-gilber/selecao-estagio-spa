import React from 'react';
import {Menu, Tabs} from 'antd';
import {NavBarContainer, Logo} from './styles.js';


const NavBar = () => {
  const LogoIn8 = require('../../../../data/assets/icons/logo-in8-dev.svg').default;

  // const [current, setCurrent] = useState('mail');
  // const items = [ {
  //   label: 'Navigation One',
  //   key: 'mail',
  //   icon: <img src={whitecircle} />
  // } ];

  return (
    <NavBarContainer id='lol' style={{width: '200px'}}>
      <Logo
        src={LogoIn8}
      />
      <ul>
        <li>
          cadastro
        </li>
        <li>
          lista
        </li>
        <li>
          sobre mim
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;

{/* <Tabs
        className='tabsLayout'
        defaultActiveKey="cadastro"
        addIcon={<img src={whitecircle}/>}
        tabBarExtraContent={{left:<img src={whitecircle}/>}}
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
        </Tabs> */}

{/* <Menu selectedKeys={[ current ]} mode="horizontal" items={items} />;

        <Menu mode="horizontal" defaultSelectedKeys={[ 'mail' ]}>
          <Menu.Item key="mail" icon={<img src={whitecircle} />}>
        Navigation One
          </Menu.Item>
          <Menu.SubMenu>
            <Menu.Item key="two" icon={<img src={whitecircle} />}>
          Navigation Two
            </Menu.Item>
          </Menu.SubMenu>
        </Menu> */}