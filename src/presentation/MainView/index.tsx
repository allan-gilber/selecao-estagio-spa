import React from 'react';
import MainSectionTitle from '../components/mainSection/MainSectionTitle';
import NavBar from '../components/mainSection/NavBar';
import ScrollButton from '../components/ScrollButton';
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