import { Request, Response } from "express"
import { User } from "../models/user"



export const getUsers = async (req: Request, res: Response) => {

    const users = await User.find()
    res.status(200).json({users})
}


export const createUser = async (req: Request, res: Response) => {

    const {name, lastName, email, password, phoneNumber, location, birthDate, modifiedAt }  = req.body
    try {
        const user = new User({name, lastName, email, password, phoneNumber, location, birthDate, modifiedAt})

        user.save()


        res.status(200).json({
            message: 'User created',
            user
        })
        
    } catch (error) {
        res.status(400).json({message: 'Error en la creación'})
    }
}
