import "dotenv/config";

import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

const port = process.env.PORT;

if (!port) {
  throw new Error("PORT is missing in your .env file");
}

// Global middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(morgan("dev"));

// Test route
app.get("/", (_req: Request, res: Response) => {
  return res
    .status(200)
    .send("Connected, Welcome to Toxic Rain Refuge Backend 👾👾");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});