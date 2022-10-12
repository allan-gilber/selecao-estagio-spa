/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useEffect} from 'react';
import ScrollBusiness from '../../../business/scrollBusiness/ScrollBusiness';
import {ScrollButtonContainer} from './styles.js';

const ScrollButton = () => {
  const arrowIcon = require('../../../data/assets/icons/topo-pag.svg');

  let scrollButton, rootElement;
  const ScrollLogic = new ScrollBusiness();
  let scrollTimer:  NodeJS.Timeout;

  useEffect(() => {
    scrollButton = document.getElementById('scrollButton')!;
    rootElement = document.documentElement!;
    window.clearInterval(scrollTimer);
    scrollTimer = setInterval(() => {
      ScrollLogic.buttonHandler(rootElement, scrollButton);
    }, 500);
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