import { getCustomerById } from "../../services/customers/customersService.js";

export async function createCustomerPage(id) {
  const customer = await getCustomerById(id);
  console.log(customer);

  const customerPage = document.createElement("div");
  customerPage.className = "customer-page";

  const pageHead = document.createElement("div");
  pageHead.className = "page-head";

  const customerCard = document.createElement("div");
  customerCard.className = "customer-card";

  const customerAttributeContainer = document.createElement("div");
  customerAttributeContainer.className = "customer-attribute-container";

  const customerName = document.createElement("h1");
  customerName.innerText = customer.name;

  for (const [key, value] of Object.entries(customer)) {
    if (key == "name") {
    } else {
      const customerAttributeCard = document.createElement("div");
      customerAttributeCard.className = "customer-attribute-card";

      const customerKey = document.createElement("h3");
      const customerValue = document.createElement("p");
      customerKey.className = "customer-key";
      customerValue.className = "customer-value";
      customerKey.innerText = key;
      customerValue.innerText = value;

      customerAttributeCard.append(customerKey, customerValue);
      customerAttributeContainer.append(customerAttributeCard);
    }
  }

  customerCard.append(customerName, customerAttributeContainer);
  customerPage.append(customerCard);

  return customerPage;
}
