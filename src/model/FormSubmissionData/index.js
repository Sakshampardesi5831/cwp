import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import FormSubmission from '../FormSubmission'; // Import the FormSubmission model if not already imported
import FormQuestion from '../FormQuestion'; // Import the FormQuestion model if not already imported

const FormSubmissionData = sequelize.define("FormSubmissionData", {
    SubmissionDataID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    SubmissionID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: FormSubmission, // Reference to the FormSubmission model
            key: 'SubmissionID'
        }
    },
    FormQuestionID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: FormQuestion, // Reference to the FormQuestion model
            key: 'FormQuestionID'
        }
    },
    Answer: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('FormSubmissionData -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default FormSubmissionData;
