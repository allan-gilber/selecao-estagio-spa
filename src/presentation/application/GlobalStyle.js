import {createGlobalStyle} from 'styled-components';
import heveltica25UL from '../../data/assets/Fonts/HelveticaUltraLt_0.ttf';
import robotoRegular from '../../data/assets/Fonts/Roboto-Regular_0.ttf';
import robotoLight from '../../data/assets/Fonts/Roboto-Light_0.ttf';
import hevelticaCondensed from '../../data/assets/Fonts/HelveticaCondensed_0.ttf';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    font-family: 'heveltica-Condensed';
    // Used fonts
  @font-face {
    font-family: 'Heveltica25-Ultra-Light-Regular';
    src: local('HelveticaUltraLt_0.ttf') url('/src/data/assets/Fonts/HelveticaUltraLt_0.ttf') format('truetype');
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
// Classes
.ant-form-item-label{
  label{
    font-family: 'Heveltica25-Ultra-Light-Regular';
    color: var(--background-white-color);
  }
}

.ant-input{
  font-family: 'heveltica-Condensed';
  color: var(--background-white-color);
  padding: 0;
  border-bottom-width : 5px;
  background-color: transparent;
  border: none;
  border-bottom: 0.1px solid var(--background-white-color);
  ::placeholder{
    font-family: 'heveltica-Condensed';
  color: var(--background-white-color);
  }

}
    // Font classes
    .pageTitles{
      font-family: 'Heveltica25-Ultra-Light-Regular';
      font-weight: normal;
    };
      
    .fieldCall {
      font-family: 'Heveltica25-Ultra-Light-Regular';
      font-size: 2rem;
    };
      
    .formText{
      font-family: 'hevelticaCondensed';
      font-size: 2rem;
    };
  
    /* Single Page Application section size and format*/
    .spa-section {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GlobalStyle;