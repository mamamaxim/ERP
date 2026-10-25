export function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    localStorage.setItem("theme", "dark");
    document.documentElement.dataset.theme = "dark";
    return;
  }
  const theme = savedTheme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
}
export function toggleTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme == "dark") {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
    return "light";
  }
  localStorage.setItem("theme", "dark");
  document.documentElement.dataset.theme = "dark";
  return "dark";
}

export function getCurrentTheme() {
  const theme = localStorage.getItem("theme");
  return theme;
}
