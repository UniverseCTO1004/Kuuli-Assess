const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/scrape", (req, res) => {
  exec("node scraper.js", (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${error.message}`);
    } else {
      res.json({ result: stdout });
    }
  });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
