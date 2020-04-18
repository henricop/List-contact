const connection = require('../database');
const {DataTypes} = require('sequelize');

const Contact =  connection.define('contatos',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name_contact:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  bairro:{
    type: DataTypes.STRING,
    allowNull: false
  },
  rua:{
    type: DataTypes.STRING,
    allowNull: false
  },
  number_contact:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  frase:{
    type: DataTypes.STRING,
    allowNull: false
  }
});
//  Contact.sync({
//    force: true
//  });

module.exports = Contact;