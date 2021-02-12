import express from "express";
import { config } from "./config/index.js";

const app = express();

app.get('/', (req, res) => res.send(config.test));

app.listen(config.port, () => console.log(`server running on port ${config.port}`));