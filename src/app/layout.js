import { createSideBar } from "./components/sidebar/sidebar.js";
import { createHeader } from "./components/header/header.js";

export function initLayout() {
  const appContainer = document.getElementById("app-container");
  const sidebar = createSideBar();
  const header = createHeader();
  const appShell = document.createElement("div");
  appShell.className = "app-shell";
  appShell.id = "app-shell";

  appContainer.append(sidebar, header, appShell);
}

export function renderNewPage(page) {
  const appShell = document.getElementById("app-shell");

  appShell.replaceChildren(page);
}
