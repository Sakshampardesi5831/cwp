import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Plant from '../Plant'; // Import the Plant model if not already imported

const Area = sequelize.define("Area", {
    AreaID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    AreaName: {
        type: DataTypes.STRING(200)
    },
    PlantID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Plant, // Reference to the Plant model
            key: 'PlantID'
        }
    },
    Description: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('Area -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Area;