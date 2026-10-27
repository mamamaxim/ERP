export async function getItems() {
  const response = await fetch("./src/data/crm/customers.json");
  if (!response.ok) throw new Error("Failed to load customers");

  const customers = await response.json();

  return customers;
}

export async function getCustomerById(id) {
  const response = await fetch("./src/data/crm/customers.json");
  if (!response.ok) throw new Error("Failed to load customers");

  const customers = await response.json();

  let returnCustomer;

  customers.forEach((customer) => {
    if (customer.id == id) {
      returnCustomer = customer;
      return customer;
    }
  });
  return returnCustomer;
}
