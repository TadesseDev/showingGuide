import React, { useContext } from "react";
import MainComponent, { Carousels } from "./styled/main.styled";
import TopNavigation from "./TopNavigation";
import picture_1 from "../resources/images/pictures/picture_1.png";
import picture_2 from "../resources/images/pictures/picture_2.png";
import picture_3 from "../resources/images/pictures/picture_3.png";
export default function Main() {
  const pictures = [picture_1, picture_2, picture_3];
  return (
    <MainComponent>
      <TopNavigation />
      <Carousels>
        {pictures.map((picture, index) =>
          <img src={picture} alt={"picture_ " + index} />
        )}
      </Carousels>
    </MainComponent>
  );
}
