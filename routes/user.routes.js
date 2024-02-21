import {Router} from "express";
const router = Router()
import {createUser, updateUser, getAllUser, deleteUser} from "../controllers/user.controller.js"
import {userPostValidation} from "../middlewares/userValidation.js";

router.post("/", userPostValidation,  createUser)
router.put("/:id",  updateUser)
router.get("/",  getAllUser)
router.delete("/:id", deleteUser)


export default router