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
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(200),
        allowNull: true,
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

export default Defect;
