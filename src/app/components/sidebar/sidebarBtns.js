import { createBtn } from "./sidebarbtn.js";

export function createSideBarBtns() {
  const btnsContainer = document.createElement("div");
  btnsContainer.className = "sidebar-btns-container";

  const btn = createBtn("dashboard");
  const btn2 = createBtn("catalog");
  const btn3 = createBtn("customers");
  const btn4 = createBtn("orders");

  btnsContainer.append(btn, btn2, btn3, btn4);

  return btnsContainer;
}
