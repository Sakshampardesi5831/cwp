import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";
import Form from "../Form"; // Import the Form model if not already imported
import Defect from "../Defect"; // Import the Defect model if not already imported
import Line from "../Line"; // Import the Line model if not already imported
import Equipment from "../Equipment"; // Import the Equipment model if not already imported
import Shift from "../Shift"; // Import the Shift model if not already imported
import User from "../Users"; // Import the User model if not already imported
import Question from "../Question";
import Images from "../Images/Images";
const FormDefect = sequelize.define(
  "FormDefect",
  {
    FormDefectID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    DMS_FORM_ID: {
      type: DataTypes.UUID,
    },
    FormID: {
      type: DataTypes.UUID,
      // references: {
      //   model: Form, // Reference to the Form model
      //   key: "FormID",
      // },
    },
    DefectID: {
      type: DataTypes.UUID,
      // references: {
      //   model: Defect, // Reference to the Defect model
      //   key: "DefectID",
      // },
    },
    LineID: {
      type: DataTypes.UUID,
      // references: {
      //   model: Line, // Reference to the Line model
      //   key: "LineID",
      // },
    },
    EquipmentID: {
      type: DataTypes.UUID,
      // references: {
      //   model: Equipment, // Reference to the Equipment model
      //   key: "EquipmentID",
      // },
    },
    ShiftID: {
      type: DataTypes.UUID,
      // references: {
      //   model: Shift,
      //   key: "ShiftID",
      // },
    },
    QuestionsId: {
      type: DataTypes.UUID,
      // references: {
      //   model: Question,
      //   key: "QuestionID",
      // },
    },
    CreatedByUserID: {
      type: DataTypes.UUID,
      // references: {
      //   model: User,
      //   key: "UserID",
      // },
    },
    AssignedToUserID: {
      type: DataTypes.UUID,
      // references: {
      //   model: User,
      //   key: "UserID",
      // },
    },
    Category: {
      type: DataTypes.STRING(255),
    },
    Comment: {
      type: DataTypes.STRING(255),
    },
    AssignmentDate: {
      type: "DATETIME",
    },
    ImagesId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Images,
        key: "ImageId",
      },
    },
  },
  {
    timestamps: false,
  }
);

if(process.env.SYNC_SEQ){
sequelize
  .sync()
  .then(() => {
    console.log("FormDefect -> table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
}

export default FormDefect;
