import {Schema, model} from 'mongoose'


interface IAnimalShelter {
    name: string  //nombre refugio
    createdAt: Date //fecha 
    modifiedAt: Date //fecha
    status: boolean 
    email: string
    password: string
    address: string
    neighborhood?: string
    city: string
    province: string
    phoneNumber: string
    countPets: number  //relacionar con la colección pets 
    instagram: string
    facebook: string
    whatsapp: string
}

const animalShelterSchema = new Schema<IAnimalShelter>({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    phoneNumber: {type: String, required: false},
    address: {type: String},
    neighborhood: {type: String, required: false},
    city: {type: String},
    province: {type: String},
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: new Date()},
    modifiedAt: {type: Date, default: new Date()},
    countPets: {type: Number, default: 0},
    instagram: {type: String},
    facebook: {type: String, required: false},
    whatsapp: {type: String},

})




export const AnimalShelter = model<IAnimalShelter>('AnimalShelter', animalShelterSchema)