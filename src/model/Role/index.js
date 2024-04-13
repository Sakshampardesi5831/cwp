import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";
import Plant from "../Plant";
const Role = sequelize.define(
  "Role",
  {
    RoleID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true, // Set as unique
    },
    RoleName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    RoleDesc: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Status: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    PlantID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    CreatedBy: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    timestamps: false, // To disable Sequelize's default timestamps
  }
);

//Role.belongsTo(Plant, { foreignKey: "PlantID" }); // Assuming you have a Plant model

// if(process.env.SYNC_SEQ){
  sequelize.sync().then(() => {
      console.log('Role -> table created successfully!');
  }).catch((error) => {
      console.error('Unable to create table : ', error);
  });
// }

export default Role;
