// Libaries
const express = require("express");
const cors = require("cors");

// Datasets
const { Commands } = require("./Commands");

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Routes & Controllers
app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Welcome to SnippHub Backend" });
});

app.get("/api/commands/:techParam", (req, res) => {
  try {
    const techParam = req.params.techParam;

    const payload = Commands.filter(
      (item) => item.techRoute.split("/")[1] === techParam,
    );

    return res.status(200).json({ data: payload });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Server setup
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
