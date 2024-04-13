import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';

const Form = sequelize.define("Form", {
    FormID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    FormName: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(200),
        allowNull: true,
    }
}, {
    timestamps: false 
});

if(process.env.SYNC_SEQ){
    sequelize.sync().then(() => {
        console.log('Area -> table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

export default Form;
