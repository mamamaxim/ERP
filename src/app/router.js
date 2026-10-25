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

async function renderRoute() {
  const { route, queryParam } = getCurrentRoute();
  const newPage = await getPage(route, queryParam);
  renderNewPage(newPage);
}

export async function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  await renderRoute();
}

export function changeRoute(newHash) {
  window.location.hash = newHash;
}
