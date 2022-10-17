import React, {useEffect} from 'react';
import ScrollBusiness from '../../../business/scrollBusiness/ScrollBusiness';
import {ScrollButtonContainer} from './styles.js';
import Icon from '../../../data/assets/icons/topo-pag.svg';

const ScrollButton = () => {

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
      src={Icon}
      onClick={() => {
        ScrollLogic.scrollToTopSmooth();
      }}
    />
  );
};

export default ScrollButton;