const {Sequelize, Model, DataTypes} = require('sequelize')

sequelize = new Sequelize('testdb', 'root', '123456', {
  dialect: 'mysql'
})

async function init() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

init()

const Person = sequelize.define('Person', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {sequelize, tableName: 'Person'})

async function add() {
  await Person.sync({ force: true })
  const jane = await Person.create({
    firstName: 'shen',
    lastName: 'kong',
  })
  console.log('111', jane.toJSON())
}

class School extends Model {}

School.init({
  student: {
    type: DataTypes.STRING
  },
  teacher: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  }
}, {sequelize, modelName: 'school'})

async function update() {
  await sequelize.sync()
  const feng = await School.findOne({
    where: {
      id: 2
    }
  })
  feng.student = 'feng'
  await feng.save()
}

async function drop() {
  await School.destroy({
    where: {
      id: 5
    }
  })
}

// drop()

// update()

add()
