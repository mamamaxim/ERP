import { createSideBarBtns } from "./sidebarBtns.js";

export function createSideBarBody() {
  const bodyContainer = document.createElement("div");
  bodyContainer.className = "sidebar-body";
  const sidebarBtns = createSideBarBtns();

  bodyContainer.append(sidebarBtns);

  return bodyContainer;
}
