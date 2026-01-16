import express from "express";
import cors from "cors";
import destinationsRouter from "./routes/destinations";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/destinations", destinationsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
