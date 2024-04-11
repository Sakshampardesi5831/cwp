import pkg from 'sequelize';
const {Sequelize,DataTypes} = pkg; 
import sequelize from '../../config/db'    

const Users=sequelize.define("Users",{
   UserId:{
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
   },
   FirstName:{
     type:DataTypes.STRING(200),
   },
   LastName:{
    type:DataTypes.STRING(200),
   },
   Email:{
     type:DataTypes.STRING(200),
   }
})
sequelize.sync({ force: true }).then(() => {
  console.log('Users -> table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default Users;