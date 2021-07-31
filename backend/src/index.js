require("dotenv").config();

const morgan = require("morgan");

const express = require("express");

const UserRouter = require("./routes/user.router");

const HTTP_PORT = process.env.HTTP_PORT || 3305;

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use("/api", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});

app.listen(HTTP_PORT, () => {
  console.log(`Aplicacao rodando ${HTTP_PORT}`);
});
