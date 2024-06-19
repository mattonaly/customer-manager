import React from "react";
import { Customer } from "../models/Customer";
import { deleteCustomer } from "../services/api";

interface Props {
  customers: Customer[];
  onRemoveCustomer: (customer: Customer) => void;
}

function CustomerList({ customers, onRemoveCustomer }: Props) {
  const handleRemove = async (customer: Customer) => {
    try {
      await deleteCustomer(customer.id);
      onRemoveCustomer(customer);
    } catch (error) {
      console.error(`Error deleting customer with ID ${customer.id}:`, error);
    }
  };

  return (
    <div className="container">
      <h2>Customers List</h2>
      {customers.map((customer) => (
        <div key={customer.id} className="customer-item">
          <strong>{customer.name}</strong>
          <span>{customer.email}</span>
          <span>{customer.phone}</span>
          <button onClick={() => handleRemove(customer)}>Remove</button>
        </div>
      ))}

      {customers.length === 0 && <p>No customers found</p>}
    </div>
  );
}

export default CustomerList;
