import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = "./db.json";

// Función para leer db.json
function readDB() {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
}

// Función para escribir en db.json
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// GET WITH FILTERS + SORT
app.get("/restaurants", (req, res) => {
  const db = readDB();
  let results = db.restaurants;
  const query = req.query;

  // --- FILTROS ---
  Object.keys(query).forEach((param) => {
    // Ignorar sort y order
    if (param === "sort" || param === "order" || param === "_page" || param === "_limit") return;

    const [field, operator] = param.split("_");
    const value = query[param].toString().toLowerCase();

    results = results.filter((item) => {
      const fieldValue = item[field]?.toString().toLowerCase() || "";

      switch (operator) {
        case "contains":
          return fieldValue.includes(value);
        case "notContains":
          return !fieldValue.includes(value);
        case "equal":
          return fieldValue === value;
        case "notEqual":
          return fieldValue !== value;
        case "startsWith":
          return fieldValue.startsWith(value);
        case "endsWith":
          return fieldValue.endsWith(value);
        default:
          return true;
      }
    });
  });

  // --- ORDENAR ---
  const sortField = query.sort;
  const sortOrder = query.order || "asc";

  if (sortField) {
    results = results.sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];

      // Comparación para strings
      if (typeof valA === "string") {
        return sortOrder === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      // Comparación para números
      if (typeof valA === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }

      return 0;
    });
  }
  const page = parseInt(query._page) || 1;
  const limit = parseInt(query._limit) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedResults = results.slice(start, end);

  res.json({
    restaurants: paginatedResults,
    totalRestaurants: results.length,
  });

});

// GET ONE
app.get("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const restaurant = db.restaurants.find((r) => r.id == id);
  if (!restaurant) return res.status(404).json({ message: "Not found" });
  res.json(restaurant);
});

// POST
app.post("/restaurants", (req, res) => {
  const db = readDB();
  const newRestaurant = { id: Date.now(), ...req.body };

  db.restaurants.push(newRestaurant);
  writeDB(db);

  res.status(201).json(newRestaurant);
});

// PUT
app.put("/restaurants/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  const index = db.restaurants.findIndex((r) => r.id == id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  db.restaurants[index] = { ...db.restaurants[index], ...req.body };
  writeDB(db);

  res.json(db.restaurants[index]);
});

// DELETE
app.delete("/restaurants/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;

  db.restaurants = db.restaurants.filter((r) => r.id != id);
  writeDB(db);

  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
