const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const clientPath = path.join(__dirname, "..", "client");

app.disable("x-powered-by");
app.use(express.static(clientPath));

app.get("/", (_req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

app.get("/dashboard", (_req, res) => {
  res.sendFile(path.join(clientPath, "dashboard.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`BMW experience running at http://localhost:${PORT}`);
});
