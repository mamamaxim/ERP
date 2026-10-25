import { getItems } from "../../services/catalog/catalogService.js";
import { createCatalogTable } from "./catalogItemsTable.js";

export async function createCatalogPage() {
  const catalogPage = document.createElement("div");
  catalogPage.className = "catalog-page";

  const items = await getItems();
  console.log(items);
  const catalogTable = createCatalogTable(items);

  catalogPage.append(catalogTable);

  return catalogPage;
}
