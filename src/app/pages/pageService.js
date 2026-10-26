import { createCatalogPage } from "./catalog-page/catalogPage.js";
import { createProductPage } from "./catalog-page/productPage.js";
import { createDashboardPage } from "./dashboard-page/dashboardPage.js";
import { saveMissingFatherRoute } from "../router.js";

async function getRouteFatherPage(route) {
  const response = await fetch("./src/data/routing/route-chains.json");
  if (!response.ok) throw new Error("Failed to load route chains");
  const routeChains = await response.json();

  let fatherRoute = "no_father_route";

  routeChains.forEach((routeChain) => {
    if (route == routeChain.route) {
      fatherRoute = routeChain.fatherRoute;
    }
  });
  return fatherRoute;
}

export async function getPage(route, queryParam) {
  const fatherRoute = await getRouteFatherPage(route);
  if (!fatherRoute == "no_father_route") {
    saveMissingFatherRoute(fatherRoute);
  }

  if (route == "/catalog") return await createCatalogPage();
  if (route == "/dashboard") return createDashboardPage();
  if (route == "/catalog/product") {
    return await createProductPage(Number(queryParam));
  }
}
