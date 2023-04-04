const express = require("express");
const app = express();

app.set("views", __dirname + `\\view`);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(`index`, {
    title: "Homepage",
  });
});

app.listen(8000, () => {
  console.log(`server running in http:localhost:8000`);
});
