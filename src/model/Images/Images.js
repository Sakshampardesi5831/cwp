import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../../config/db';
import Defect from '../Defect';
const FormDefectsImages = sequelize.define('Form_Defects_Images', {
    ImageId:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    DefectID: {
        type: DataTypes.UUID,
        allowNull: true,
        // references: {
        //     model: Defect, // Reference to the Defect model
        //     key: 'DefectID'
        // }
    },
    Images:{
        type: DataTypes.STRING,
        allowNull: true,
    }
});
sequelize.sync().then(() => {
    console.log('Images -> table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default FormDefectsImages;