const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/tasks.routes")

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cookieParser());
server.use(authRoutes);
server.use(taskRoutes);



// server.use(router);

module.exports = server;