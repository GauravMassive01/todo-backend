import {Router} from "express";
const router = Router()
import {createToDo, updateToDoById, getAllToDoList, deleteToDoList} from "../controllers/todos.controller.js"
import {upload} from "../middlewares/fileUpload.middleware.js"
import {todoCreateValidation} from "../middlewares/todoValidation.js";
router.post("/create", upload.single("image"),
    todoCreateValidation,
    createToDo
)
router.put("/update/:id", upload.single("image"), updateToDoById)
router.get("/get-all-todolist", getAllToDoList)
router.delete("/delete/:id", deleteToDoList)

export default router