const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

app.get("/getTostadas", (req, res) => {
  const tostadas = [
    { id: 1, sabor: "Frijoles" },
    { id: 2, sabor: "Aguacate" },
    { id: 3, sabor: "Queso" },
  ];
  res.json(tostadas);
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
