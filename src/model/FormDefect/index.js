import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Form from '../Form'; // Import the Form model if not already imported
import Defect from '../Defect'; // Import the Defect model if not already imported
import Line from '../Line'; // Import the Line model if not already imported
import Equipment from '../Equipment'; // Import the Equipment model if not already imported
import Shift from '../Shift'; // Import the Shift model if not already imported
import User from '../Users'; // Import the User model if not already imported

const FormDefect = sequelize.define("FormDefect", {
    FormDefectID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    FormID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Form, // Reference to the Form model
            key: 'FormID'
        }
    },
    DefectID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Defect, // Reference to the Defect model
            key: 'DefectID'
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
            model: Equipment, // Reference to the Equipment model
            key: 'EquipmentID'
        }
    },
    ShiftID: {
        type: DataTypes.UUID,
        references: {
            model: Shift, // Reference to the Shift model
            key: 'ShiftID'
        }
    },
    CreatedByUserID: {
        type: DataTypes.UUID,
        references: {
            model: User, // Reference to the User model for CreatedByUserID
            key: 'UserID'
        }
    },
    AssignedToUserID: {
        type: DataTypes.UUID,
        references: {
            model: User, // Reference to the User model for AssignedToUserID
            key: 'UserID'
        }
    },
    CreationDate: {
        type: DataTypes.DATE
    },
    AssignmentDate: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('FormDefect -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default FormDefect;
