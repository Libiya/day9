var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('seqomr', { title: 'Express' });
});
const sequelize = new Sequelize('employeeschema', 'root', 'Rose8123', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
mysqlconnection
