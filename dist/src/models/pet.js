"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const mongoose_1 = require("mongoose");
const petSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    raza: { type: String, require: false },
    age: { type: Number },
    status: { type: String },
    descriptionStatus: { type: String },
    vacunationComplete: { type: Boolean, default: false },
    nextVacune: { type: String },
    interestedPeople: (Array),
    image: { type: String },
    animalShelter: { type: mongoose_1.Schema.Types.ObjectId, ref: 'AnimalShelter' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
exports.Pet = (0, mongoose_1.model)('Pet', petSchema);
//# sourceMappingURL=pet.js.map