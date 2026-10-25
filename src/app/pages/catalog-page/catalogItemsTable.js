export function createCatalogTable(items) {
  const itemIndex = items[0];
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableHeaderRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");
  table.classList = "table";
  const tableContainer = document.createElement("div");
  tableContainer.className = "table-container";

  for (const [key, value] of Object.entries(itemIndex)) {
    const headerColumn = document.createElement("th");
    headerColumn.textContent = key;

    tableHeaderRow.append(headerColumn);
  }
  tableHead.append(tableHeaderRow);

  items.forEach((item) => {
    const tableRow = document.createElement("tr");
    tableRow.addEventListener("click", () => {
      window.location.hash = `/catalog/product?${item.barcode}`;
    });

    for (const [key, value] of Object.entries(item)) {
      const tableData = document.createElement("td");
      tableData.textContent = value;

      tableRow.append(tableData);
    }
    tableBody.append(tableRow);
  });

  table.append(tableHead, tableBody);

  tableContainer.append(table);

  return tableContainer;
}
