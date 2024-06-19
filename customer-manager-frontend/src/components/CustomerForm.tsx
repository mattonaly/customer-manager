import React, { useState } from "react";

import { Customer } from "../models/Customer";
import { addCustomer } from "../services/api";

interface Props {
  onAddCustomer: (customer: Customer) => void;
}

function CustomerForm({ onAddCustomer }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newCustomer = await addCustomer({ name, email, phone });
      onAddCustomer(newCustomer);
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
