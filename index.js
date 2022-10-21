import express from "express";
import { pool } from "./src/db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./src/routes/index.js";
import { DB_PORT } from "./config.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the react / node challenge server");
});

app.use("/shipments-administration-api", router);

app.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "hello world" as RESULT');
  res.json(result[0]);
});

app.listen(DB_PORT);

console.log("Server listening on Port: " + PORT);
