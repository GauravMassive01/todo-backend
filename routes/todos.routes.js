import {Router} from "express";
const router = Router()
import {createToDo, updateToDoById, getAllToDoList, deleteToDoList, getTodoListById} from "../controllers/todos.controller.js"
import {upload} from "../middlewares/fileUpload.middleware.js"
import {todoCreateValidation} from "../middlewares/todoValidation.js";
router.post("/create", upload.single("image"),
    todoCreateValidation,
    createToDo
)
router.put("/:id", upload.single("image"), updateToDoById)
router.get("/", getAllToDoList)
router.delete("/:id", deleteToDoList)
router.get('/:id', getTodoListById)