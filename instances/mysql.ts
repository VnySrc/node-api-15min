import { Sequelize } from "sequelize";

export const sequelize = new Sequelize (
    "productsApi",
    "root",
    "viny",

    {
    dialect: "mysql",
    port: 3306
    }
)