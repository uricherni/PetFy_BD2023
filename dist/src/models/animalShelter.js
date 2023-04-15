"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalShelter = void 0;
const mongoose_1 = require("mongoose");
const animalShelterSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String, required: false },
    address: { type: String },
    neighborhood: { type: String, required: false },
    city: { type: String },
    province: { type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    modifiedAt: { type: Date, default: new Date() },
    countPets: { type: Number, default: 0 },
    instagram: { type: String },
    facebook: { type: String, required: false },
    whatsapp: { type: String },
});
exports.AnimalShelter = (0, mongoose_1.model)('AnimalShelter', animalShelterSchema);
//# sourceMappingURL=animalShelter.js.map