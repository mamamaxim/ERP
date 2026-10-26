import { getItemByBarcode } from "../../services/catalog/catalogService.js";
import { createNavBackBtn } from "../../components/buttons/navBackBtn.js";

export async function createProductPage(barcode) {
  const item = await getItemByBarcode(barcode);
  console.log(item);

  const productPage = document.createElement("div");
  productPage.className = "product-page";

  const pageHead = document.createElement("div");
  pageHead.className = "page-head";

  const navBackButton = createNavBackBtn();

  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productAttributesContainer = document.createElement("div");
  productAttributesContainer.className = "product-attributes-container";

  const productName = document.createElement("h1");
  productName.innerText = item.name;

  for (const [key, value] of Object.entries(item)) {
    if (key == "name") {
    } else {
      const productAttributeCard = document.createElement("div");
      productAttributeCard.className = "product-attribute-card";

      const productKey = document.createElement("h3");
      const productValue = document.createElement("p");
      productKey.className = "product-key";
      productValue.className = "product-value";
      productKey.innerText = key;
      productValue.innerText = value;

      productAttributeCard.append(productKey, productValue);
      productAttributesContainer.append(productAttributeCard);
    }
  }

  pageHead.append(navBackButton);

  productCard.append(productName, productAttributesContainer);

  productPage.append(pageHead, productCard);

  return productPage;
}
