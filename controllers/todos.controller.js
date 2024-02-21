import Todo from "../models/todo.model.js";
import {uploadOnCloudinary} from "../utils/uploadOnCloudinary.js";


async function createToDo (req, res){
    console.log(req?.body)
    try {
        console.log(req?.file)
        let imagePath;
        if (req.file) {
            imagePath = req?.file?.path
        }
        const imageUrl = await uploadOnCloudinary(imagePath)
        console.log(imageUrl)
        const createdToDo = await Todo.create({
            ...req?.body,
            image: imageUrl.url
        })
        if(createdToDo){
            return res.status(200).json({ data: createdToDo,  message: "todo is created"})
        }
        return res.status(404).json({ message: "Error while creating the todo"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function updateToDoById (req, res){
    const toDoId = req?.params?.id;
    const imagePath = req?.file?.path
    try {
        let imageUrl
        if(imagePath){
            imageUrl = await uploadOnCloudinary(imagePath)
        }

        const updateFields = { ...req.body };
        if (imageUrl) {
            updateFields.image = imageUrl.url;
        }

        const updateToDo = await Todo.update(updateFields, {
            where: {
                id: toDoId
            },
            returning: true,
            plain: true
        })
        if(!updateToDo){
            return res.status(404).json({ message: "Todo does not exit with provided id"})
        }
        return res.status(200).json({ data: updateToDo[1], message: "updated todo list"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function getAllToDoList (req, res){
    try {
        const todos = await Todo.findAll()
        return res.status(200).json({ data: todos, message: "all todos list"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function deleteToDoList(req, res){
    const toDoId = req?.params?.id
    try {
        const deletedToList = await Todo.destroy({
            where:{
                id: toDoId
            }
        })
        return res.status(200).json({ deleteToDoList: deletedToList, message: "deleted successfully"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


async function getTodoListById(req, res){
    try {
        const todoId = req?.params?.id
        const todoList = await Todo.findByPk(todoId)
        return res.status(200).json({ data: todoList, message: "deleted successfully"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}




export {createToDo, updateToDoById, getAllToDoList, deleteToDoList, getTodoListById}