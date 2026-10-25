export function createSideBarHeader() {
  const sideBarHeader = document.createElement("div");
  sideBarHeader.className = "sidebar-header";

  const h2 = document.createElement("h2");
  h2.className = "h2-sidebar";
  h2.innerText = "MENU";

  sideBarHeader.append(h2);

  return sideBarHeader;
}
