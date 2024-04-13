import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;
import sequelize from "../../config/db";

const Frequency = sequelize.define(
  "Frequency",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    FrequencyName: {
      type: DataTypes.STRING(200),
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
      console.log("Frequency -> table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
}

export default Frequency;
