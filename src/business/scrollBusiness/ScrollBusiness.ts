export class ScrollBusiness {

  public  handleScroll(
    rootElement: HTMLElement, scrollButton: HTMLElement
  ): any {
    document.addEventListener('scroll', this.buttonHandler(rootElement, scrollButton));
  }

  public buttonHandler(rootElement: HTMLElement, scrollButton: HTMLElement): any {
    console.log('dados', window.innerHeight, (window.innerHeight * 0.3), (window.innerHeight * 0.3) < rootElement.scrollTop);
    console.log('dados2', window.innerHeight, rootElement.scrollTop);
    if ((window.innerHeight * 0.3) < rootElement.scrollTop ) {
      scrollButton.classList.add('showButton');
    } else {
      scrollButton.classList.remove('showButton');
    }
  }

  public activeButtonHandler(rootElement: HTMLElement){
    const sectionDefiner = Math.trunc(rootElement.scrollTop / window.innerHeight);
    console.log('section', sectionDefiner);

    switch (sectionDefiner){
    case 0:{
      const navButton = document.getElementById(`navButton${sectionDefiner}`)!;
      navButton.classList.add('showButton');

      break;
    }
    case 1:{
      const navButton = document.getElementById(`navButton${sectionDefiner}`)!;
      navButton.classList.add('showButton');

      break;
    }
    case 2:{
      const navButton = document.getElementById(`navButton${sectionDefiner}`)!;
      navButton.classList.add('showButton');

      break;
    }

    default:{
      const navButton = document.getElementById(`navButton${sectionDefiner}`)!;
      navButton.classList.add('showButton');

      break;}
    }
  }
}

export default ScrollBusiness;