import "./App.css";

import { useEffect, useState } from "react";

import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import { Customer } from "./models/Customer";
import { getCustomers } from "./services/api";

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleRemoveCustomer = (customer: Customer) => {
    setCustomers(customers.filter((c) => c.id !== customer.id));
  };

  const handleAddCustomer = async (newCustomer: Customer) => {
    try {
      setCustomers([...customers, newCustomer]);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div className="App">
      <CustomerList
        customers={customers}
        onRemoveCustomer={handleRemoveCustomer}
      />
      <CustomerForm onAddCustomer={handleAddCustomer} />
    </div>
  );
}

export default App;
