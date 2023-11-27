const express = require("express");
const router = require("./src/router");

const app = express();

const port = 8000;

app.use(express.json());

app.use("/persons", router);

app.listen(port, (err) => {
  if (err) {
    console.error("Something went wrong");
    return;
  }

  console.log(`Server is running on ${port} 🚀`);
});
