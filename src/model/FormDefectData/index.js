import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import FormSubmission from '../FormSubmission'; // Import the FormSubmission model if not already imported
import FormDefect from '../FormDefect'; // Import the FormDefect model if not already imported

const FormDefectData = sequelize.define("FormDefectData", {
    FormDefectDataID: {
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
    FormDefectID: {
        type: DataTypes.UUID,
        allowNull: true,
        // references: {
        //     model: FormDefect, // Reference to the FormDefect model
        //     key: 'FormDefectID'
        // }
    },
    isDefective: {
        type: DataTypes.BOOLEAN,
        allowNull: true
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

export default FormDefectData;
