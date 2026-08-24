"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const heroes_1 = __importDefault(require("./routes/heroes"));
const db_1 = require("./config/db");
(0, db_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use('/heroes', heroes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map