import { toggleTheme, getCurrentTheme } from "../../theme.js";

function onClickThemeBtn(thumb, icon) {
  const prevTheme = getCurrentTheme();
  thumb.classList.remove(prevTheme);
  const newTheme = toggleTheme();
  thumb.classList.add(newTheme);

  icon.src = `./public/icons/${newTheme}.svg`;
}

export function createThemeToggleBtn() {
  const currentTheme = getCurrentTheme();
  const buttonContainer = document.createElement("span");
  buttonContainer.className = "toggle-theme-container";

  const thumb = document.createElement("span");
  thumb.className = `toggle-thumb ${currentTheme}`;

  const icon = document.createElement("img");
  icon.className = "toggle-icon";
  icon.src = `./public/icons/${currentTheme}.svg`;

  buttonContainer.addEventListener("click", () => {
    onClickThemeBtn(thumb, icon);
  });

  thumb.append(icon);
  buttonContainer.append(thumb);

  return buttonContainer;
}
