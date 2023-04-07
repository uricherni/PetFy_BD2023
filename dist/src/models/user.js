"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String, required: false },
    location: { type: String, required: false },
    birthDate: { type: Date },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    modifiedAt: { type: Date, default: new Date() },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.js.map