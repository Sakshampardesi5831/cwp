import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";
import Area from "../Area"; // Import the Area model if not already imported

const Line = sequelize.define(
  "Line",
  {
    LineID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    AreaID: {
      type: DataTypes.UUID,
      allowNull: true,
      // references: {
      //   model: Area, // Reference to the Area model
      //   key: "AreaID",
      // },
    },
    LineName: {
      type: DataTypes.STRING(50),
    },
    Description: {
      type: DataTypes.STRING(200),
    },
    UpdateDate: {
      type:'DATETIME',
    },
  },
  {
    timestamps: false, // To disable Sequelize's default timestamps
  }
);

if(process.env.SYNC_SEQ){
  sequelize.sync().then(() => {
      console.log('Lines -> table created successfully!');
  }).catch((error) => {
      console.error('Unable to create table : ', error);
  });
}

export default Line;
