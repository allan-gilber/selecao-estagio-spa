export class ScrollBusiness {
  private scrollTimer: any;

  public  handleScroll(
    rootElement: HTMLElement, scrollButton: HTMLElement
  ): any {
    document.addEventListener('scroll', this.buttonHandler(rootElement, scrollButton));
  }

  public buttonHandler(rootElement: HTMLElement, scrollButton: HTMLElement): any {
    clearTimeout(this.scrollTimer);
    this.setScrollTimer(setTimeout(() => {
      console.log('lol', rootElement, scrollButton);
      // Do something on scroll
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      console.log('dados', rootElement.scrollHeight, rootElement.clientHeight, rootElement.scrollTop, (rootElement.scrollTop / scrollTotal ) > 0.80);
      if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
        // Show button
        return scrollButton.classList.add('showButton');
      } else {
        // Hide button
        return scrollButton.classList.remove('showButton');
      }
    }, 30));
  }

  public setScrollTimer(value: any){
    this.scrollTimer = value;
  }

  public getScrollTimer(){
    return this.scrollTimer;
  }
}

export default ScrollBusiness;