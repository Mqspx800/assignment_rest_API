const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'


const db = new Sequelize(databaseUrl)
db.sync()
  .then(() => console.log('Database is up and running'))
  .catch(console.error)


const Movie = db.define('movies', {
  title: { type: Sequelize.TEXT },
  yearOfRelease: { type: Sequelize.INTEGER },
  synopsis: { type: Sequelize.TEXT }
})

Movie.create({
  title: 'The Dark Knight',
  yearOfRelease: 2008,
  synopsis: 'When the menace known as The Joker emerges....'
})
.catch(err=>console.log(err))

Movie.create({
  title: 'Inception',
  yearOfRelease: 2010,
  synopsis: 'A thief who steals corporate secrets through the use of....'
})
.catch(err=>console.log(err))

Movie.create({
  title: 'Interstellar',
  yearOfRelease: 2014,
  synopsis: 'A team of explorers travel through a wormhole in space....'
})
.catch(err=>console.log(err))

module.exports = Movie

