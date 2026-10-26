import { renderNewPage } from "./layout.js";
import { getPage } from "./pages/pageService.js";

function splitHashToRouteAndParam(hash) {
  const hashArray = Array.from(hash);
  let route = "";
  let queryParam = "";
  let foundQuestionMark = false;

  for (let i = 0; i <= hashArray.length - 1; i++) {
    if (foundQuestionMark) {
      queryParam = queryParam + hashArray[i];
    }
    if (hashArray[i] == "?") {
      foundQuestionMark = true;
    }
    if (!foundQuestionMark) {
      route = route + hashArray[i];
    }
  }

  return { route, queryParam };
}

function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || "/dashboard";
  const { route, queryParam } = splitHashToRouteAndParam(hash);

  return { route, queryParam };
}
export function saveMissingFatherRoute(fatherRoute) {
  localStorage.setItem("prev_route", fatherRoute);
  
}

async function renderRoute() {
  if (localStorage.getItem("curr_route") != window.location.hash.slice(1)) {
    localStorage.setItem("prev_route", localStorage.getItem("curr_route"));
    localStorage.setItem("curr_route", window.location.hash.slice(1));
  }
  const { route, queryParam } = getCurrentRoute();
  const newPage = await getPage(route, queryParam);
  renderNewPage(newPage);
}

export async function initRouter() {
  if (
    !localStorage.getItem("curr_route") ||
    localStorage.getItem("curr_route") != window.location.hash.slice(1)
  ) {
    localStorage.setItem("prev_route", "");
    localStorage.setItem("curr_route", "");
  }

  window.addEventListener("hashchange", renderRoute);
  await renderRoute();
}

export function changeRoute(newHash) {
  window.location.hash = newHash;
}
