import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";

const DmsFormSubmit = sequelize.define(
  "Dms_Form_Submit",
  {
    Dms_Form_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    Form: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Shift: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Line: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Equipment: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Answers: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    submittedBy: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    Plant: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

if(process.env.SYNC_SEQ){
  sequelize.sync().then(() => {
      console.log('Area -> table created successfully!');
  }).catch((error) => {
      console.error('Unable to create table : ', error);
  });
}
export default DmsFormSubmit;
