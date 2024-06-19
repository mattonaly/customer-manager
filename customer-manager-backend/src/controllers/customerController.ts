import { Request, Response } from "express";

import { CustomerService } from "../services/customerService";

const customerService = new CustomerService();

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error: unknown) {
    res.status(500).json({ message: error });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await customerService.deleteCustomer(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
