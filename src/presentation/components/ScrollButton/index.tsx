/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useEffect} from 'react';
import ScrollBusiness from '../../../business/scrollBusiness/ScrollBusiness';
import {ScrollButtonContainer} from './styles.js';

const ScrollButton = () => {
  const arrowIcon = require('../../../data/assets/icons/topo-pag.svg');
  let scrollButton, rootElement, eventListener;
  const ScrollLogic = new ScrollBusiness();
  let scrollTimer;


  const addEventlistener = () => {

    scrollButton = document.getElementById('scrollButton')!;
    rootElement = document.documentElement!;
    console.log('scroll', scrollButton);
    document.addEventListener('scroll', function buttonHandler(){
      window.clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        new ScrollBusiness().handleScroll(rootElement, scrollButton);
      });
    });
    console.log('event', eventListener);
  };
  useEffect(() => {
    addEventlistener();
  }, []);


  return (
    <ScrollButtonContainer
      id='scrollButton'
      src={arrowIcon.default}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }}
    />
  );
};

export default ScrollButton;