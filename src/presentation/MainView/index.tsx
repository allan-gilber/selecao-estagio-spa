import React from 'react';
import MainSectionTitle from '../components/mainSection/MainSectionTitle';
import NavBar from '../components/mainSection/NavBar';

const MainView = () => {
  return (
    <section id='main-section-container' className='spa-section'>
      <NavBar/>
      <MainSectionTitle/>
    </section>
  );
};

export default MainView;