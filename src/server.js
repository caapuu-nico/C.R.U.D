const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/tasks.routes");
const cors = require("cors");
const server = express();

server.use(cors({
    origin: "http://localhost:5173"
}))
server.use(express.json());
server.use(morgan("dev"));
server.use(cookieParser());
server.use(authRoutes);
server.use(taskRoutes);



// server.use(router);

module.exports = server;