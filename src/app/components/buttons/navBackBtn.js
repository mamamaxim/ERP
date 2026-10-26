export function onClickNavBack() {
  window.location.hash = localStorage.getItem("prev_route");
}

export function createNavBackBtn() {
  const btn = document.createElement("div");
  btn.className = "arrow-back-button";
  const icon = document.createElement("img");
  icon.className = "arrow-back-img";
  icon.src = `./public/icons/arrow-back.svg`;

  btn.append(icon);

  btn.addEventListener("click", onClickNavBack);

  return btn;
}
