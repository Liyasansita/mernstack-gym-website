import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { sendEmail } from "./utils/sendEmail.js";
import Contact from "./models/contact.js";
import contactRoutes from "./routes/contactRoute.js";

const app = express();
const router = express.Router();

// Load environment variables
config({ path: "./config.env" });

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
connectDB();

// Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Send email
    await sendEmail({
      email: "liyasansita2004@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    // Save to MongoDB
    await Contact.create({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Message sent and saved successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening at port ${process.env.PORT}`);
});
