import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Question = sequelize.define("Question", {
    QuestionID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    QuestionText: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    QuestionType: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(200),
        allowNull: true,
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

if(process.env.SYNC_SEQ){
    sequelize.sync().then(() => {
        console.log('Questions -> table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

export default Question;
