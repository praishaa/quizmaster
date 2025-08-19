
import { sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new sequelize({
  dialect: "sqlite",
  storage: process.env.DB_PATH || "./users.db",
  logging: false,
});
export default sequelize;
