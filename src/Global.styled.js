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
  font-family: Gilroy_Light;
}

:root{
  --automatic: #555B67;
  --primary-color: #f5f6fa;
  --secondary-color: #2e6ef6;
  --blur: #838181;
  --blur2: #d3cdcd75;
  --green: #5EB182;
  --green_0-5: #42a3872b;
}

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      }
a{
  text-decoration: none;
  color: black;
}

  button {
    outline: none;
    border: none;
    padding: 10px 15px;
    background-color: var(--secondary-color);
    margin: 5px;
    border-radius: 5px;
    color: white;
  }
  .arrange-vertical{
        display: flex;
    align-items: center;
  }
        .icon {
          width: 20px;
          margin: 5px;
        }
`;
export default GlobalStyles;
