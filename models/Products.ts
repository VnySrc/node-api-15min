import { sequelize } from "../instances/mysql";
import { DataTypes, Model } from "sequelize"

interface userInterface extends Model {
    id: number,
    name: string,
    price: string,

}

export const Product = sequelize.define<userInterface>("Product", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    } ,
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, 
    {
        timestamps: false,
        createdAt: false,
    }
)