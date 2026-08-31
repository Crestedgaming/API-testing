"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const heroes_1 = __importDefault(require("./routes/heroes"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(process.env.MONGODB_URL || "");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/heroes', heroes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map