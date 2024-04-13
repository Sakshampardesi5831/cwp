import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Line from '../Line'; // Import the Line model if not already imported

const Equipment = sequelize.define("Equipment", {
    EquipmentID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    EquipmentName: {
        type: DataTypes.STRING(200)
    },
    LineID: {
        type: DataTypes.UUID,
        allowNull: true,
        // references: {
        //     model: Line, // Reference to the Line model
        //     key: 'LineID'
        // }
    },
    Description: {
        type: DataTypes.STRING(200)
    },
    CreationDate: {
        type:'DATETIME'
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

export default Equipment;
