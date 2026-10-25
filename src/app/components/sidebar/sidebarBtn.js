export function createBtn(routeName) {
  const btn = document.createElement("a");
  btn.className = "sidebar-btn";
  btn.innerText = routeName;
  btn.href = `#/${routeName}`;

  return btn;
}
