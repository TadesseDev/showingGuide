import { createContext } from "react";
import sidebar_icon from "../resources/images/sidebar-icon.svg";
import calendar from "../resources/images/calendar.svg";
import dashboard from "../resources/images/dashboard.svg";
import msl_list from "../resources/images/msl_list.svg";
import my_client from "../resources/images/my_client.svg";
import notifications from "../resources/images/notifications.svg";
import search_property from "../resources/images/search_property.svg";
import help_desk from "../resources/images/help_desk.svg";
const IconsContainer = createContext();
export const icons = {
  sidebar_icon,
  calendar,
  dashboard,
  msl_list,
  my_client,
  notifications,
  search_property,
  help_desk,
};
export default IconsContainer;
