import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Form from '../Form'; 
import Question from '../Question'; 
import Line from '../Line'; 
import Equipment from '../Equipment'; 
import Shift from '../Shift'; 

const FormQuestion = sequelize.define("FormQuestion", {
    FormQuestionID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    FormID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Form, // Reference to the Form model
            key: 'FormID'
        }
    },
    QuestionID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Question, // Reference to the Question model
            key: 'QuestionID'
        }
    },
    LineID: {
        type: DataTypes.UUID,
        references: {
            model: Line, // Reference to the Line model
            key: 'LineID'
        }
    },
    EquipmentID: {
        type: DataTypes.UUID,
        references: {
            model: Equipment, 
            key: 'EquipmentID'
        }
    },
    ShiftID: {
        type: DataTypes.UUID,
        // references: {
        //     model: Shift, 
        //     key: 'ShiftID'
        // }
    }
}, {
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('FormQuestion -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default FormQuestion;
