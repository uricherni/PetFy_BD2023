import {Schema, model} from 'mongoose'


interface IPet {
    name: string
    description: string
    raza?: string
    age: number
    status: string  // 'adopcion' | 'transito' 
    descriptionStatus: string
    vacunationComplete: boolean
    nextVacune: string
    interestedPeople: Array<{ type: Schema.Types.ObjectId, ref: 'User' }>
    image: string
    animalShelter: { type: Schema.Types.ObjectId, ref: 'AnimalShelter' }
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // donations: string[] Se va a relacionar con la tabla de donaciones

}

const petSchema = new Schema<IPet>({
    name: {type: String},
    description: {type: String},
    raza: {type: String, require: false},
    age: {type: Number},
    status: {type: String}, 
    descriptionStatus: {type: String},
    vacunationComplete: {type: Boolean, default: false},
    nextVacune: {type: String},
    interestedPeople: Array<{ type: Schema.Types.ObjectId, ref: 'User' }>,
    image: {type: String},
    animalShelter: { type: Schema.Types.ObjectId, ref: 'AnimalShelter' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }, 

})




export const Pet = model<IPet>('Pet', petSchema)