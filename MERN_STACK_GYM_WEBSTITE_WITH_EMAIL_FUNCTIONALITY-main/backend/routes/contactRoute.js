import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await Contact.create({ name, email, message });
    res.status(200).json({ message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;

