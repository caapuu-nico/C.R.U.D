const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const server = express();

server.use(morgan("dev"));
server.use(authRoutes);
server.use(express.json());
server.use(cookieParser());



// server.use(router);

module.exports = server;