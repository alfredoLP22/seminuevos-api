import express from "express";
import adRoutes from "./routes/adRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/ads", adRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
