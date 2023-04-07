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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectionDB_1 = require("../db/connectionDB");
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.path = {
            users: '/api/user',
            animalShelter: '/api/animalshelter'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT;
        this.connectionDB();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, connectionDB_1.dbConnection)();
        });
    }
    routes() {
        this.app.use(this.path.users, user_1.default);
        // this.app.use(this.path.animalShelter, animalShelterRoutes)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run in ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map