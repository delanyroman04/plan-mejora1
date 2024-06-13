import {createPool} from "mysql2/promise";
import {config} from "dotenv";
config();

export const db = createPool({
    Host:process.env.MYSQL_HOST,
    User:process.env.MYSQL_USER,
    Port:process.env.MYSQL_PORT,
    Password:process.env.MYSQL_PASSWORD,
    Database:process.env.MYSQL_DB
})

