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
        allowNull: true,
        // references: {
        //     model: FormSubmission, // Reference to the FormSubmission model
        //     key: 'SubmissionID'
        // }
    },
    FormQuestionID: {
        type: DataTypes.UUID,
        allowNull: true,
        // references: {
        //     model: FormQuestion, // Reference to the FormQuestion model
        //     key: 'FormQuestionID'
        // }
    },
    Answer: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

if(process.env.SYNC_SEQ){
    sequelize.sync().then(() => {
        console.log('Area -> table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

export default FormSubmissionData;
