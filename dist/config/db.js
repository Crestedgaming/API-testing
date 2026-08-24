"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.db = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.db = promise_1.default.createPool({
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    database: process.env.DB_NAME || "",
    password: process.env.DB_PASSWORD || "",
    port: parseInt(process.env.DB_PORT || "3306")
});
const connectToDatabase = async () => {
    let connection;
    try {
        connection = await exports.db.getConnection();
        console.log("Connected to the database");
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        if (error instanceof AggregateError) {
            console.error("Connection errors:", error.errors);
        }
    }
    finally {
        connection?.release();
    }
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=db.js.map