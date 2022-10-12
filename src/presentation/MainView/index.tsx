import React from 'react';
import MainSectionTitle from '../components/mainSection/MainSectionTitle';
import NavBar from '../components/mainSection/NavBar';
import {MainSectionContainer} from './styles.js';

const MainView = () => {
  return (
    <MainSectionContainer>
      <NavBar/>
      <MainSectionTitle/>
    </MainSectionContainer>
  );
};

export default MainView;