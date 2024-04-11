import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Shift = sequelize.define("Shift", {
    ShiftID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    ShiftName: {
        type: DataTypes.STRING(200)
    },
    Description: {
        type: DataTypes.STRING(200)
    },
    StartTime: {
        type: DataTypes.DATE
    },
    EndTime: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('Shift -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Shift;