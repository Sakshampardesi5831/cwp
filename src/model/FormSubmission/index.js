import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";
import Form from "../Form";
import Line from "../Line";
import Equipment from "../Equipment";
import Shift from "../Shift";
const FormSubmission = sequelize.define(
  "FormSubmission",
  {
    SubmissionID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    FormID: {
      type: DataTypes.UUID,
      allowNull: true,
      // references: {
      //   model: Form,
      //   key: "FormID",
      // },
    },
    LineID: {
      type: DataTypes.UUID,
      allowNull: true,
      // references: {
      //   model: Line, 
      //   key: "LineID",
      // },
    },
    EquipmentID: {
      type: DataTypes.UUID,
      allowNull: true,
      // references: {
      //   model: Equipment,
      //   key: "EquipmentID",
      // },
    },
    ShiftID: {
      type: DataTypes.UUID,
      allowNull: true,
      // references: {
      //   model: Shift, // Reference to the Shift model
      //   key: "ShiftID",
      // },
    },
    SubmissionDate: {
      type: 'DATETIME',
    },
    SubmissionBy: {
      type: DataTypes.STRING(200),
    },
  },
  {
    timestamps: false, // To disable Sequelize's default timestamps
  }
);

if(process.env.SYNC_SEQ){
  sequelize.sync().then(() => {
      console.log('Area -> table created successfully!');
  }).catch((error) => {
      console.error('Unable to create table : ', error);
  });
}

export default FormSubmission;
