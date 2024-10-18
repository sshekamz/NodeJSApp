const express = require("express");
const cors = require("cors");

const app = express();
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
const jokes = [
  {
    id: 1,
    joke: "Why don't skeletons fight each other? They don't have the guts!",
  },
  {
    id: 2,
    joke: "What do you call fake spaghetti? An impasta!",
  },
  {
    id: 3,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 4,
    joke: "Why don’t scientists trust atoms? Because they make up everything!",
  },
  {
    id: 5,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 6,
    joke: "Why was the math book sad? It had too many problems.",
  },
  {
    id: 7,
    joke: "Why don’t eggs tell jokes? They’d crack each other up!",
  },
  {
    id: 8,
    joke: "What did one wall say to the",
  },
];

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(3000);
