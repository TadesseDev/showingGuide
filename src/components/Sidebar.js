import React from "react";
import { useContext } from "react";
import SidebarComponent from "./styled/sidebar.styled";
import iconsContext from "../context/iconsContext";
export default function SideBar() {
  const {
    sidebar_icon,
    calendar,
    dashboard,
    msl_list,
    my_client,
    notifications,
    search_property,
    help_desk,
  } = useContext(iconsContext);
  return (
    <SidebarComponent>
      <div  id="top-sidebar">
        <div id="sidebar-icon">
          <img src={sidebar_icon} alt="" />
        </div>
        <div id="bar"> </div>
      </div>
      <div id="content-container">
        <ul>
          <li>
            <a>
              <img src={dashboard} alt="" className="icon" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <img src={search_property} alt="" className="icon" />
              <span className="text">Search Property</span>
            </a>
          </li>
          <li>
            <a>
              <img src={calendar} alt="" className="icon" />
              <span className="text">Calendar</span>
            </a>
          </li>
          <li>
            <a>
              <img src={my_client} alt="" className="icon" />
              <span className="text">My Clients</span>
            </a>
          </li>
          <li>
            <a>
              <img src={msl_list} alt="" className="icon" />
              <span className="text">MSL Lists</span>
            </a>
          </li>
          <li>
            <a>
              <img src={notifications} alt="" className="icon" />
              <span className="text">Notifications</span>
            </a>
          </li>
          <li>
            <a>
              <img src={dashboard} alt="" className="icon" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <img src={search_property} alt="" className="icon" />
              <span className="text">Search Property</span>
            </a>
          </li>
          <li>
            <a>
              <img src={calendar} alt="" className="icon" />
              <span className="text">Calendar</span>
            </a>
          </li>
          <li>
            <a>
              <img src={my_client} alt="" className="icon" />
              <span className="text">My Clients</span>
            </a>
          </li>
          <li>
            <a>
              <img src={msl_list} alt="" className="icon" />
              <span className="text">MSL Lists</span>
            </a>
          </li>
          <li>
            <a>
              <img src={notifications} alt="" className="icon" />
              <span className="text">Notifications</span>
            </a>
          </li>
        </ul>
        <div>
          <a href="#">Need Help?</a>
        </div>
      </div>
      <div>
        <a href="#">
          <img src={help_desk} alt="Help Desk" className="icon" /> Help Desk
        </a>
      </div>
    </SidebarComponent>
  );
}
