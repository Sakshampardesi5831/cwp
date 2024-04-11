import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Plant from "../Plant"
const Role = sequelize.define("Role", {
    RoleID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true // Set as unique
    },
    RoleName: {
        type: DataTypes.STRING(200)
    },
    RoleDesc: {
        type: DataTypes.STRING(200)
    },
    Status: {
        type: DataTypes.STRING(200)
    },
    PlantID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    CreationDate: {
        type: DataTypes.DATE
    },
    CreatedBy: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false // To disable Sequelize's default timestamps
});

Role.belongsTo(Plant, { foreignKey: 'PlantID' }); // Assuming you have a Plant model

sequelize.sync().then(() => {
    console.log('Role -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Role;