"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_1 = require("../models/user");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.find();
    res.status(200).json({ users });
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, email, password, phoneNumber, location, birthDate, modifiedAt } = req.body;
    try {
        const user = new user_1.User({ name, lastName, email, password, phoneNumber, location, birthDate, modifiedAt });
        user.save();
        res.status(200).json({
            message: 'User created',
            user
        });
    }
    catch (error) {
        res.status(400).json({ message: 'Error en la creación' });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=users.js.map