import React, { useContext } from "react";
import TopNavigationComponent from "./styled/topNavigation.styled";
import iconsContext from "../context/iconsContext";
export default function TopNavigation() {
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
    <TopNavigationComponent>
      <div id="stat">
        <span className="back">
          <img src={arrow_back} alt="go back" />
        </span>
        <p>
          2218 Thornridge Cir.. <strong>E5579076 </strong>
        </p>
      </div>
      <div id="profile">
        <span id="notification">
          <span className="notification-count">5</span>
          <img className="icon" src={notifications} alt="go back" />
        </span>
        <img className="icon" src={search} alt="Search for item" />
        <img className="icon" src={setting} alt="Setting" />
        <img className="icon" src={logout} alt="Log out" />
        <span className="userDetail">
          <img src={user} alt="Profile detail" />
          <span className="user">
            <span className="name">Berkay Erdinc</span>
            <span className="title">hi berkayerdinc.com</span>
          </span>
          <img src={arrow_down} alt="more" />
        </span>
      </div>
    </TopNavigationComponent>
  );
}
