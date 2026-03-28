import express from "express";
import { createContactMessage, getAllMessages } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContactMessage);
router.get("/", getAllMessages);

export default router