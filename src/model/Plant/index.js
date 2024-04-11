import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Plant = sequelize.define("Plant", {
    PlantID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true // Set as unique
    },
    PlantName: {
        type: DataTypes.STRING(200)
    },
    Location: {
        type: DataTypes.STRING(200)
    },
    TimeZone: {
        type: DataTypes.STRING(200)
    },
    PlantZone: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync({ force: true }).then(() => {
    console.log('Plant -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Plant;