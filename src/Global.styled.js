import { createGlobalStyle } from "styled-components";
import Gilroy_ExtraBold from "./resources/fonts/Gilroy-ExtraBold.otf";
import Gilroy_Light from "./resources/fonts/Gilroy-Light.otf";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Gilroy_ExtraBold";
  src: url(${Gilroy_ExtraBold});
  font-display: swap;
}
@font-face {
  font-family: "Gilroy_Light";
  src: url(${Gilroy_Light});
  font-display: swap;
}
html,body{
  background-color: #f5f6fa;
  margin: 0;
  padding: 0;
}
#root{
  margin-top: 25px;
  font-family: Gilroy_Light;
}

:root{
  --primary-color: #f5f6fa;
  --secondary-color: #2e6ef6;
  --blur: silver;

}

        .icon {
          width: 20px;
          margin: 5px;
        }
`;
export default GlobalStyles;
