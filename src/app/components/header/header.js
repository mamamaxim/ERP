export function createHeader() {
  const headerContainer = document.createElement("header");
  headerContainer.className = "header-container";

  const h1 = document.createElement("h1");
  h1.className = "h1-header";
  h1.innerText = "Next";

  headerContainer.append(h1);

  return headerContainer;
}
