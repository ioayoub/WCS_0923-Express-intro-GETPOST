const persons = require("../data/persons.json");

function getAll(req, res) {
  persons ? res.json(persons) : res.sendStatus(404);
}

module.exports = { getAll };
