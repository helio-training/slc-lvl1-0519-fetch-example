const express = require("express");
const cors = require("cors")()
const app = express();

app.use(cors)
app.use(express.json())

const names = [
    'Parker',
    'Devin',
    'Rebekah',
    'Weston',
    'Wesley'
]

app.get("/count", function(req, res) {
  const result = { count: names.length };
  res.send(result);
});
app.get("/:index", function(req, res) {
  const index = req.params.index;
  res.send({ name: names[index] });
});

app.listen(4000, console.log('Listening on Port 4000'));
