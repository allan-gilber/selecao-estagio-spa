import {createGlobalStyle} from 'styled-components';
import heveltica25UL from '../../data/assets/Fonts/HelveticaUltraLt_0.ttf';
import robotoRegular from '../../data/assets/Fonts/Roboto-Regular_0.ttf';
import robotoLight from '../../data/assets/Fonts/Roboto-Light_0.ttf';
import hevelticaCondensed from '../../data/assets/Fonts/HelveticaCondensed_0.ttf';

export const GlobalStyle = createGlobalStyle`
  // Used fonts
  @font-face {
    font-family: 'Heveltica25-Ultra-Light-Regular';
    src: local(${heveltica25UL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'Roboto-Regular';
      src: local(${robotoRegular}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto-Light';
      src: local(${robotoLight}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'heveltica-Condensed';
    src: local(${hevelticaCondensed}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
    #root {
      width: max(100vw, 360px);
      height: max(100vh, 640px);
      overflow: hidden;
      background:var(--background-white);
    }
    :root {
    
    // Transições de viewport
    --phone: 37.5rem;
    --tablet: 37.51rem;
    --landTablet: 48.1rem;
    --desktop: 62rem;
    --widescreen: 87.5rem;
    // Colors
    --background-color: #29abe2;
    --title-color: #29abe2;
    --table-number: #012d51;
    --register-btn: #012d51;
    --column-title-color: #012d51;
    --column-tables-color: #29abe2;
    --table-information: #808080;

    /* --primary-color: 'green';
    --details: 'yellow';
    --secondary-color: 'brown';
    --disabled-color: 'gray';
    --error-color: #DA1E28;
    --success-color: #24A148;
    --warning-color: '#faad14';
    --btnText-color: 'black';
    --label-color: #393939;
    --white-color:  #E6E6E6;
    --menuText-color: #828282;
    --redText-color: #EA1D2C;
    --backgroundWhite-color: #E6E6E6;
    --shadow-box: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); */
    /* --primary--color: #5e81d1;
    --secondary--color: #f16b44; */
  }
  // Font classes
  .pageTitles{
    font-family: 'Heveltica25-Ultra-Light-Regular';
    font-size: 2rem;
  };
    
  .fieldCall {
    font-family: 'Heveltica25-Ultra-Light-Regular';
    font-size: 2rem;
  };
    
  .formText{
    font-family: 'hevelticaCondensed';
    font-size: 2rem;
  };
`;