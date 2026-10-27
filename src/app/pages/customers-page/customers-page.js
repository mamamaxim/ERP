import { getItems } from "../../services/customers/customersService.js";
import { createCustomersTable } from "./customersTable.js";

export async function createCustomersPage() {
  const header = document.createElement("h1");
  header.innerText = "Customers";

  const headerContainer = document.createElement("div");
  headerContainer.className = "customers-header-container";

  const customersPage = document.createElement("div");
  customersPage.className = "customers-page";

  const customers = await getItems();
  console.log(customers);
  const customersTable = createCustomersTable(customers);

  headerContainer.append(header);
  customersPage.append(headerContainer, customersTable);

  return customersPage;
}
