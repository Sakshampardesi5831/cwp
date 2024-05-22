import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";

const QuestionMapping = sequelize.define(
  "Question_Mapping",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    FormId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    EquipmentId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    LineId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ShiftId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    PlantId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    FrequencyId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    QuestionId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
if (process.env.SYNC_SEQ) {
  sequelize
    .sync()
    .then(() => {
      console.log("Question Mapping -> table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
}

export default QuestionMapping;
