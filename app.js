import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
import todosRoutes from "./routes/todos.routes.js";
import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/todos", todosRoutes)
app.use("/api/v1/user", userRoutes)


export default app