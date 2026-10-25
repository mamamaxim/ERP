import { createSideBarBody } from "./sidebarBody.js";
import { createThemeToggleBtn } from "../buttons/themeTogglebtn.js";
import { createSideBarHeader } from "./sidebarHeader.js";
export function createSideBar() {
  const sideBarContainer = document.createElement("div");
  sideBarContainer.className = "sidebar-container";

  const sidebarBody = createSideBarBody();
  const sidebarHeader = createSideBarHeader();
  const themeButton = createThemeToggleBtn();

  sidebarBody.append(themeButton);
  sideBarContainer.append(sidebarHeader, sidebarBody);

  return sideBarContainer;
}
