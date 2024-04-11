import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Shift from '../Shift'; // Import the Shift model if not already imported
import Area from '../Area'; // Import the Area model if not already imported

const ShiftAreaAssignment = sequelize.define("ShiftAreaAssignment", {
    ShiftID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Shift, // Reference to the Shift model
            key: 'ShiftID'
        }
    },
    AreaID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Area, // Reference to the Area model
            key: 'AreaID'
        }
    },
    Date: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('ShiftAreaAssignment -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default ShiftAreaAssignment;