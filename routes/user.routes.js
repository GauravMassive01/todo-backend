import {Router} from "express";
const router = Router()
import {createUser, updateUser, getAllUser} from "../controllers/user.controller.js"
import {userPostValidation} from "../middlewares/userValidation.js";

router.post("/", userPostValidation,  createUser)
router.put("/",  updateUser)
router.get("/",  getAllUser)


export default router