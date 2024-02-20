import User from "../models/user.model.js";
import bcrypt from "bcrypt"

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};
async function createUser(req, res){

    try {
        const {name, email, password} = req?.body
        const hashedPassword =  await hashPassword(password)
        const createdUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })
        if(!createdUser){
            return res.status(404).json({ message: "failed to create the user"})
        }
        return res.status(200).json({ data: createdUser, message: "todo list created"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function updateUser(req, res){

    const userId = req?.params?.id;
    try {
        const updatedUser = await User.update(req?.body, {
            where: {
                id: userId
            }
        })
        if(!updatedUser){
            return res.status(404).json({ message: "failed to update the user"})
        }
        return res.status(200).json({ data: updatedUser, message: "updated user"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function getAllUser(req, res){
    try {
        const allUser = await User.findAll({ include: 'todos' })
        return res.status(200).json({ data: allUser, message: "all users"})
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export {createUser, updateUser, getAllUser}
