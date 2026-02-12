const path = require("path");
const express = require("express");

const app = express();
const PORT = 3004;

// Serve static files in this folder (css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML at /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/app-ads.txt", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app-ads.txt'));
});

app.listen(PORT, () => {
  console.log(`Privacy policy server running on port ${PORT}`);
});
