import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
const db = Database("./backend/usuarios.db");

const PORT = 2000;

app.use(express.json());
app.use(cors());

app.post("/api/usuario", (req, res) => {
  const { name, lastName, email } = req.body;

  try {
    const consult =
      db.prepare(`INSERT INTO misUsuarios (name, lastName, email) VALUES (?, ?, ?)
      `);
    const run = consult.run(name, lastName, email);
    console.log("Usuario insertado correctamente:", run);
    const select = db.prepare("SELECT * FROM misUsuarios").all();
    console.log(select);
    res.status(201).json({ mensaje: "Usuario insertado correctamente" });
  } catch (error) {
    console.error("Error al insertar el usuario:", error);
    res.status(500).json({ mensaje: "Error al insertar el usuario" });
  }
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});
