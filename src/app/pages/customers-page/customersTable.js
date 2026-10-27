export function createCustomersTable(customers) {
  const itemIndex = customers[0];
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

  customers.forEach((customer) => {
    const tableRow = document.createElement("tr");
    tableRow.addEventListener("click", () => {
      window.location.hash = `/customers/customer?${customer.id}`;
    });

    for (const [key, value] of Object.entries(customer)) {
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
