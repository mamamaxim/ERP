import { createBtn } from "./sidebarbtn.js";

export function createSideBarBtns() {
  const btnsContainer = document.createElement("div");
  btnsContainer.className = "sidebar-btns-container";

  const btn = createBtn("dashboard");
  const btn2 = createBtn("catalog");

  btnsContainer.append(btn, btn2);

  return btnsContainer;
}
