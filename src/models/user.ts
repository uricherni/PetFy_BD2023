import {Schema, model} from 'mongoose'


interface IUser {
    name: string
    lastName: string
    birthDate: Date
    createdAt: Date
    modifiedAt: Date
    email: string
    location: string
    phoneNumber: string
    password: string
    status: boolean
    // donations: string[] Se va a relacionar con la tabla de donaciones

}

const userSchema = new Schema<IUser>({
    name: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    phoneNumber: {type: String, required: false},
    location: {type: String, required: false},
    birthDate: {type: Date},
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: new Date()},
    modifiedAt: {type: Date, default: new Date()},

})




export const User = model<IUser>('User', userSchema)