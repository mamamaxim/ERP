export async function getItems() {
  const response = await fetch("./src/data/catalog/items.json");
  if (!response.ok) throw new Error("Failed to load items");

  const products = await response.json();

  return products;
}

export async function getItemByBarcode(barcode) {
  const response = await fetch("./src/data/catalog/items.json");
  if (!response.ok) throw new Error("Failed to load items");

  const products = await response.json();

  let returnProduct;

  products.forEach((product) => {
    if (Number(product.barcode) == barcode) {
      returnProduct = product;
      return product;
    }
  });

  return returnProduct;
}
