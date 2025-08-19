import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
const Profiles = sequelize.define("Profile", {
  fullname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
User.hasOne(Profile, { foreignKey: "userId" });
Profile.belongsTo(User, { foreignKey: "userId" });
export default Profiles;
