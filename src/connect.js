import mysql, { createConnection } from 'mysql'
import * as dotenv from 'dotenv';
dotenv.config();
export const db=mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
})