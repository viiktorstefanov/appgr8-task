import express from "express";
import { configDotenv } from "dotenv";
import cors  from "cors";
import { generateId } from "./services/generateId.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   const id =  generateId();
   console.log(id);
   
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
