import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Defect = sequelize.define("Defect", {
    DefectID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    DefectType: {
        type: DataTypes.STRING(200)
    },
    Description: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

sequelize.sync().then(() => {
    console.log('Defect -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Defect;
