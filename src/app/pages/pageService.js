import { createCatalogPage } from "./catalog-page/catalogPage.js";
import { createProductPage } from "./catalog-page/productPage.js";
import { createDashboardPage } from "./dashboard-page/dashboardPage.js";
export async function getPage(route, queryParam) {
  if (route == "/catalog") return await createCatalogPage();
  if (route == "/dashboard") return createDashboardPage();
  if (route == "/catalog/product") {
    return await createProductPage(Number(queryParam));
  }
}
