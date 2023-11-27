const express = require("express");
const router = express.Router();

const persons = require("./data/persons.json");
const { getAll } = require("./controllers/personsController");

router.get("/", getAll);

router.post("/single", (req, res) => {
  const { id, name } = req.body;

  const person = persons.find((p) => p.id === id);

  person ? res.json(person) : res.sendStatus(404);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const person = persons.find((p) => p.id === id);

  person ? res.json(person) : res.sendStatus(404);
});

module.exports = router;
