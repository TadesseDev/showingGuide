import React from "react";
import HomeComponent from "./styled/home.styled";
import SideBar from "../components/Sidebar";
import Main from "../components/Main";
export default function Home() {
  return (
    <HomeComponent>
      <SideBar />
      <Main />
    </HomeComponent>
  );
}
