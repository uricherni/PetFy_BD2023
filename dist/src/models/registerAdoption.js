"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdoption = void 0;
const mongoose_1 = require("mongoose");
const registerAdoptionSchema = new mongoose_1.Schema({
    dateAdoption: { type: Date, required: false },
    dateTransito: { type: Date, required: false },
    statusTransito: { type: String },
    dateEndTransito: { type: Date, required: false },
    statusAdoption: { type: String },
    animalShelter: { type: mongoose_1.Schema.Types.ObjectId, ref: 'AnimalShelter' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    pet: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Pet' },
});
exports.RegisterAdoption = (0, mongoose_1.model)('RegisterAdoption', registerAdoptionSchema);
//# sourceMappingURL=registerAdoption.js.map