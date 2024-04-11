import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Answers = sequelize.define("Answers", {
    AnswerID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Answer: {
        type: DataTypes.STRING(300),
    },
    QuestionID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

export default Answers;