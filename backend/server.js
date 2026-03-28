import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Portfolio Backend API is running...");
});

app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});