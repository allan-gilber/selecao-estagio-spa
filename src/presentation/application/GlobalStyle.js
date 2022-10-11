import {createGlobalStyle} from 'styled-components';
import heveltica25UL from '../../data/assets/Fonts/HelveticaUltraLt_0.ttf';
import robotoRegular from '../../data/assets/Fonts/Roboto-Regular_0.ttf';
import robotoLight from '../../data/assets/Fonts/Roboto-Light_0.ttf';
import hevelticaCondensed from '../../data/assets/Fonts/HelveticaCondensed_0.ttf';

const GlobalStyle = createGlobalStyle`
  // Used fonts
  @font-face {
    font-family: Heveltica25-Ultra-Light-Regular;
    src: url(${heveltica25UL}) format('truetype');
  }

  @font-face {
      font-family: Roboto-Regular;
      src: url(${robotoRegular}) format('truetype');
  }

  @font-face {
      font-family: Roboto-Light;
      src: url(${robotoLight}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: Heveltica-Condensed;
    src: url(${hevelticaCondensed}) format('truetype');
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
    font-family: Heveltica-Condensed;
  }

    #root {
      width: max(100vw, 360px);
      max-width: 100%;
      min-height: (100vh, 640px);
      overflow: hidden;
      background:var(--background-color);
    }

    :root {
    // Transições de viewport
    --phone: 37.5rem;
    --tablet: 37.51rem;
    --land-tablet: 48.1rem;
    --desktop: 62rem;
    --widescreen: 87.5rem;

    // Colors
    --background-color: #29abe2;
    --title-color: #29abe2;
    --table-number-color: #012d51;
    --register-btn-color: #012d51;
    --column-title-color: #012d51;
    --column-tables-color: #29abe2;
    --table-information-color: #808080;
    --text-color: #dee3e9;
    --background-white-color: #ffffff;
}

.ant-input{
  font-family: Heveltica-Condensed;
  color: var(--background-white-color);
  padding: 0;
  border-bottom-width : 5px;
  background-color: transparent;
  border: none;
  border-bottom: 0.1px solid var(--background-white-color);
  ::placeholder{
    font-family: Heveltica-Condensed;
  color: var(--background-white-color);
  }

}
    // Font classes
    .pageTitles{
      font-family: Heveltica25-Ultra-Light-Regular;
    };
      
    .fieldCall {
      font-family: Roboto-Regular;
    };
      
    .formText{
      font-family: Heveltica-Condensed;
    };
  
    /* Single Page Application section size and format*/
    .spa-section {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #tableHeaderText {
      table thead th{
        font-family: Roboto-Regular;
        font-weight: 500;
        color:var(--column-title-color);
      }
    }
`;

export default GlobalStyle;