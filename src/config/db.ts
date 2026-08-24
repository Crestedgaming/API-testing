import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    database: process.env.DB_NAME || "",
    password: process.env.DB_PASSWORD || "",
    port: parseInt(process.env.DB_PORT || "3306")
});

export const connectToDatabase = async () => {
    let connection: Awaited<ReturnType<typeof db.getConnection>> | undefined;
    try {
        connection = await db.getConnection();
        console.log("Connected to the database");
    } catch (error: unknown) {
        console.error("Error connecting to the database:", error);
        if (error instanceof AggregateError) {
            console.error("Connection errors:", error.errors);
        }
    } finally {
        connection?.release();
    }
}