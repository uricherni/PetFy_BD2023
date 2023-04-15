import {Schema, model} from 'mongoose'

interface IRegisterAdoption {
    dateAdoption?: Date
    statusAdoption: string
    statusTransito: string
    dateTransito?: Date
    dateEndTransito?: Date
    animalShelter: { type: Schema.Types.ObjectId, ref: 'AnimalShelter' }
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    pet: { type: Schema.Types.ObjectId, ref: 'Pet' },

}

const registerAdoptionSchema = new Schema<IRegisterAdoption>({
    dateAdoption: {type: Date, required: false},
    dateTransito: {type: Date, required: false},
    statusTransito: {type: String},
    dateEndTransito: {type: Date, required: false},
    statusAdoption: {type: String},
    animalShelter: { type: Schema.Types.ObjectId, ref: 'AnimalShelter' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    pet: { type: Schema.Types.ObjectId, ref: 'Pet' },

})




export const RegisterAdoption = model<IRegisterAdoption>('RegisterAdoption', registerAdoptionSchema)