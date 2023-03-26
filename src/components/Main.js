import React, { useContext } from "react";
import MainComponent from "./styled/main.styled";
import iconsContext from "../context/iconsContext";
import TopNavigation from "./TopNavigation";
export default function Main() {
  const {
    arrow_back,
    arrow_down,
    notifications,
    search,
    setting,
    logout,
    user,
  } = useContext(iconsContext);
  return (
      <MainComponent>
          <TopNavigation />
    </MainComponent>
  );
}
