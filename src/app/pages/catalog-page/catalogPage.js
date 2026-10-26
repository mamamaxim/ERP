import { getItems } from "../../services/catalog/catalogService.js";
import { createCatalogTable } from "./catalogItemsTable.js";

export async function createCatalogPage() {
  const header = document.createElement("h1");
  header.innerText = "Catalog";

  const headerContainer = document.createElement("div");
  headerContainer.className = "catalog-header-container";

  const catalogPage = document.createElement("div");
  catalogPage.className = "catalog-page";

  const items = await getItems();
  console.log(items);
  const catalogTable = createCatalogTable(items);

  headerContainer.append(header);
  catalogPage.append(headerContainer, catalogTable);

  return catalogPage;
}
