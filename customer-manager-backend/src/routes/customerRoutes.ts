import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
} from "../controllers/customerController";

const router = Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.delete("/:id", deleteCustomer);

export default router;
