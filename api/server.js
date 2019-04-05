//server module
const express = require("express");
//cross-origin-data
const cors = require("cors");
//security
const helmet = require("helmet");
//axios is used for offsite data
const axios = require("axios");
//routers
const authRouter = require("../auth/auth-router.js");
const restricted = require("../auth/restricted-middleware.js");
//server
const server = express();
//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
//routing
server.use("/api/auth", authRouter);
//Server is accessing api offsite using getJokes function
server.get("/api/jokes", restricted, getJokes);
//function used in API jokes
function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
//root of server
server.get("/", (req, res) => {
  res.send("It's alive!");
});
//export!
module.exports = server;
