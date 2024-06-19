import { dataSource } from "../config/db";
import { Customer } from "../entities/customer";
import { CustomerGetDTO, CustomerPostDTO } from "../models/customerModel";

export class CustomerService {
  private customerRepository = dataSource.getRepository(Customer);

  async getAllCustomers(): Promise<CustomerGetDTO[]> {
    // SQL: SELECT * FROM customers;
    return await this.customerRepository.find();
  }

  async createCustomer(customerData: CustomerPostDTO) {
    // SQL: INSERT INTO customers (name, email, phone) VALUES (
    //   customerData.name,
    //   customerData.email,
    //   customerData.phone
    // );
    const customer = this.customerRepository.create(customerData);
    return await this.customerRepository.save(customer);
  }

  async deleteCustomer(id: number) {
    // SQL: DELETE FROM customers WHERE id = id;
    return await this.customerRepository.delete(id);
  }
}
