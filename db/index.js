const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html
// require('../db/models')
// const Blogpost = require('./models/blogpost')
// const User = require('./models/user')

// const Blogpost = require('./models/blogpost')



const db = new Sequelize('postgres://root:root@localhost:5432/mydb')
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 

// const db = new Sequelize(`postgres`, `cho`, ``, {
//   host: "postgres://postgres:postgres@localhost/postgres",
//   dialect: 'postgres'
// });

// const db = new Sequelize("postgres://postgres:postgres@localhost/postgres", {
//   dialect: 'postgres'
//   // anything else you want to pass
// })
// const db = new Sequelize('postgres://postgres:postgres@localhost/postgres', {
//   // const db = new Sequelize('postgres://localhost:5432/postgres', 'cho', '', {
//   logging: false
// }) // Example for postgres

const User = db.define("user", {
  name: DataTypes.TEXT,

});

const BlogPost = db.define("blogpost", {
  title: DataTypes.TEXT,
  content: DataTypes.TEXT,
  dataDate: {
    type: DataTypes.DATE,
  },
});

module.exports = { db, User, BlogPost }