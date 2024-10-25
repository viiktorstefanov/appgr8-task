import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { storage } from "./storage.js";
import { generateId } from "./services/generateId.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res) => {
  try {
    res.status(200).json(storage);
    console.log('All notes send.')
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/notes/add", (req, res) => {
  try {
    const noteContent = req.body.data;
    const newNote = {
      id: generateId(),
      content: noteContent
    };

    storage.push(newNote);

    res.status(200).json(newNote);
    console.log('Successfully added a new note');

  } catch(error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/api/notes/remove/:noteId", (req, res) => {
  const noteId = req.params.noteId;

  try {
    const noteIndex = storage.findIndex((n) => n.id === noteId);
    storage.splice(noteIndex, 1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
